The code under this folder isn't mine, I copied it from [https://github.com/wix/vscode-glean/tree/master](https://github.com/wix/vscode-glean/tree/master) - the only reason I did so is because cloning & installing the dependencies of the repo above was not possible due to an error being thrown at the `postinstall` step

I did some minor modifications to the `statefulToStateless` function to allow an anonymous stateless component to be rendered instead of a named one. This is very useful in the case of a function wrapping the old class component - like the case of a decorator converted to a function call.