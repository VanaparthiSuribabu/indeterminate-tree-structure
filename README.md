# Indeterminate Tree Structure

Indeterminate tree structure component is created using Angular 4 and it is useful to have tristate checkboxes
![alt text](https://github.com/GnanaDeepthi/indeterminate-tree-structure/blob/master/images/image.png)
 

To preview demo of Indeterminate TreeStructure component, [Click here](https://angular-wkuqps.stackblitz.io)

 

## Using the complete angular project

Download the Indeterminate TreeStructureComponent folder and install the required packages and run the application.

### Installing

Installing node_module use command npm install

### Run server

Run ng serve for a dev server. Navigate to http://localhost:4200/.

The app will automatically reload if you change any of the source files.

### Build

Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

## HOW TO USE ?

1. Provide the JSON data  for creating the Tree Structure.

TreeStructure Json Interface Format:

```sh

interface TreeNode {

label: string;

checked: boolean;

children: TreeNode[];

}

```

2. If you check the all child input checkboxes, then the parent checkbox is checked and viceversa

3. If you uncheck the all child input checkboxes, then the parent checkbox is unchecked and viceversa.

4. If you uncheck any one of the child checkbox, then the parent of the child checkbox will goes to the indeterminate state.

 

### Pass the data to Indeterminate TreeStructure component as mentioned below

```sh

<app-tree-node  [node]="tree"  (selectEvents)="handleSelection( $event )"  [selectedNode]="selectedTreeNode"></app-tree-node>

```

#### Input Decorator Description

- [node]: It allows you to keep your Json Data in Treestructure Formate.

- [selectedNode]: It allows you to highlight the node which you have selected.

#### Output Decorator Description

- handleSelection( $event) is a function which will emit the current selectedNode.

```sh

 handleSelection( node: TreeNode ): void {

console.group( 'Selected Tree Node' );

console.log( 'Label:', node.label );

}

```

 
