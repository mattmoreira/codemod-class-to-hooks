import { Transform, ClassExpression } from "jscodeshift";
import { statefulToStateless } from './glean/stateful-to-stateless'

const transform: Transform = ({ source }, api) => {
  const root = api.jscodeshift(source)

  const astsClassExpressions = root
    .find(ClassExpression)

  const transformedClasses = astsClassExpressions.paths()
    .map(ast => ({
      code: source.slice(ast.value.start, ast.value.end),
      isCallArgument: ast.parentPath.name === 'arguments'
    }))
    .map(classInfo => statefulToStateless(classInfo.code, classInfo.isCallArgument).text)

  astsClassExpressions.replaceWith(transformedClasses)

  return root.toSource()
};

export default transform