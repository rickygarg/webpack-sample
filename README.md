There are two components where the main-component is dependent on the other-component.

(1) main-component
(2) other-component

Also, both these components have a common dependency, @polymer/polymer

In the main-component package.json, the other component is marked with a relative path '../other-component'. Thanks to npm 6.9.0, there is only a single node_modules in the main_component where all the dependencies of both the components reside together.

Now if I run a webpack4 build in main-component, I get two copies of @polymer/polymer referred as:

./node_modules/@polymer/polymer
../node_modules/@polymer/polymer

This not only bloats up the package, but also results in failure because two versions of the same dependency-1.0.0 simply can't live together.

However webpack4 emits depenency @polymer/polymer just once (as expected) if:
1) other-component is moved within the main-component
2) webpack is run on the parent folder (webpack-sample) of both main-component and other-component

Notes:

npm install (version 6.9) usually does the right thing in both cases, so it's not the question of multiple dependencies in multiple node_modules folders.

manually adding resolve isn't practical, since there are many common dependencies between the two components.

Symbolic links result in the same behavior with duplicate dependencies.