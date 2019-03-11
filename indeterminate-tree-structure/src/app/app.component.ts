import { Component, Input } from '@angular/core';





export interface TreeNode {

 label: string;
 checked: boolean;
 children: TreeNode[];

 }

@Component({

selector: 'app-root',

templateUrl: './app.component.html',
styleUrls: [ './app.component.css' ]

})

export class AppComponent {

@Input() node: TreeNode;


private tree: TreeNode;

private selectedTreeNode: TreeNode | null;

constructor() {
this.tree = {

label: 'TreeStructure',
checked: false,
children: [

    {
     label: 'src',
      checked: false,
      children: [

              {
              label: 'app',
               checked: false,
               children: [
                         {
                  label: 'app.component.html',
                  checked: false,
                  children: []
                         },
                         {
                          label: 'app.component.ts',
                          checked: false,
                          children: []
                      },
                      {
                        label: 'app.component.css',
                        checked: false,
                        children: []
                    },



               {
                   label: 'tree-node',
                   checked: false,
                   children: [
                              {
                      label: 'tree-node.component.html',
                      checked: false,
                      children: []
                               },
                               {
                                label: 'tree-node.component.ts',
                                checked: false,
                                children: []
                            },
                            {
                              label: 'tree-node.component.css',
                              checked: false,
                              children: []
                          },



                   ]
               },
              ]

            },
               ]
    },

    {

     label: 'assets',
    checked: false,
    children: [
              {
              label: '.gitkeep',
              checked: false,
              children: []
              },

              ]
    },
    {
      label: 'environments',
      checked: false,
      children: [
        {
          label: 'environment.prod.ts',
          checked: false,
          children: []
          },
          {
            label: 'environment.ts',
            checked: false,
            children: []
            }
      ]
    },
    {
       label: 'index.html',
       checked: false,
       children: []

    }
         ],
         };
          }
output = false;
public handleSelection( node: TreeNode ): void {

this.output = true;
this.selectedTreeNode = node;

console.group( 'Selected Tree Node' );

console.log( 'Label:', node.label );

console.log( 'Children:', node.children.length );





}


}
