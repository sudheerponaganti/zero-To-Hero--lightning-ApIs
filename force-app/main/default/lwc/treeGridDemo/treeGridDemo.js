import { LightningElement, track } from 'lwc';

export default class TreeGridDemo extends LightningElement {
    @track currentExpandedRows;
    gridLoadingState = false;
    gridColumns = [
        {
            type: 'text',
            fieldName: 'accountName',
            label: 'Account Name',
            initialWidth: 300,
        },
        {
            type: 'number',
            fieldName: 'employees',
            label: 'Employees',
        },
        {
            type: 'phone',
            fieldName: 'phone',
            label: 'Phone Number',
        },
        {
            type: 'url',
            fieldName: 'accountOwner',
            label: 'Account Owner',
            typeAttributes: {
                label: { fieldName: 'accountOwnerName' },
            },
        },
        {
            type: 'text',
            fieldName: 'billingCity',
            label: 'Billing City',
        },
    ];

    gridData = [
        {
            name: '125313-7j',
            accountName: 'Dach-Welch',
            phone: '837-555-0100',
            _children: []
        },
        {
            name: '584996-s7',
            accountName: 'Corkery-Windler',
            phone: '837-555-0100',
            _children: [
                {
                    name: '747773-jw',
                    accountName: 'Corkery-Abshire',
                    phone: '837-555-0100',
                },
                {
                    name: '377526-zg',
                    accountName: 'Robel, Friesen and Flatley',
                    phone: '837-555-0100',
                    _children: [
                        {
                            name: '955330-wp',
                            accountName: 'Donnelly Group',
                            phone: '837-555-0100',
                        },
                        {
                            name: '343693-9x',
                            accountName: 'Kshlerin Group',
                            phone: '837-555-0100',
                        },
                    ],
                },
                {
                    name: '638483-y2',
                    accountName: 'Bruen, Steuber and Spencer',
                    phone: '837-555-0100',
                    _children: []
                },
            ],
        },
        {
            name: '306979-mx',
            accountName: 'Spinka LLC',
            phone: '837-555-0100'
        }
    ];

    gridExpandedRows = [
        '584996-s7',
        '377526-zg'
    ];

    getCurrentExpandedRows() {
        const treegrid = this.template.querySelector('.treeGrid');
        this.currentExpandedRows = treegrid.getCurrentExpandedRows().toString();
    }




    childrenData = {
        '125313-7j': [
            {
                name: '125313-7j-A',
                accountName: 'Acme Corporation (Oakland)',
                employees: 745,
                phone: '837-555-1212',
                accountOwner: 'http://example.com/john-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'New York, NY',
            },
            {
                name: '125313-7j-B',
                accountName: 'Acme Corporation (San Francisco)',
                employees: 578,
                phone: '837-555-1212',
                accountOwner: 'http://example.com/jane-doe',
                accountOwnerName: 'Jane Doe',
                billingCity: 'Los Angeles, CA',
            },
        ],

        '638483-y2': [
            {
                name: '638483-y2-A',
                accountName: 'Allied Technologies',
                employees: 390,
                phone: '837-555-1212',
                accountOwner: 'http://example.com/jane-doe',
                accountOwnerName: 'Jane Doe',
                billingCity: 'Los Angeles, CA',
                _children: [
                    {
                        name: '123556-B-B-A-A',
                        accountName: 'Allied Technologies (UV)',
                        employees: 270,
                        phone: '837-555-1212',
                        accountOwner: 'http://example.com/john-doe',
                        accountOwnerName: 'John Doe',
                        billingCity: 'San Francisco, CA',
                    },
                ],
            },
        ],
    };

    handleRowToggle(event) {
        const rowName = event.detail.name;
    //   console.log('tge row name is ', rowName)
        const hasChildrenContent = event.detail.hasChildrenContent;
    
        if (hasChildrenContent === false) {
            this.gridLoadingState = true;
    
            // call a method to retrieve the updated data tree that includes the missing children
            this.retrieveUpdatedData(rowName).then((newData) => {
                this.gridData = newData;
                this.gridLoadingState = false;
            });
        }
    }

    retrieveUpdatedData(rowName) {
        return new Promise((resolve) => {
            // mimic server delay
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            window.setTimeout(() => {
                // add children to data
                const updatedData = this.addChildrenToRow(
                    this.gridData,
                    rowName,
                    this.childrenData[rowName]
                );
    
                resolve(updatedData);
            }, 2000);
        });
    }
addChildrenToRow(data, rowName, children) {
    // step through the array using recursion until we find the correct row to update
    const newData = data.map((row) => {
        // does this row have a properly formatted _children key with content?
        let hasChildrenContent = false;
        if (
            // eslint-disable-next-line no-prototype-builtins
            row.hasOwnProperty('_children') &&
            Array.isArray(row._children) &&
            row._children.length > 0
        ) {
            hasChildrenContent = true;

            // console.log('has children',hasChildrenContent)
        }

        // if this is the row that was toggled then add the child content
        if (row.name === rowName) {
            // console.log('the has content',hasChildrenContent)
            row._children = children;
            // otherwise keep searching for the correct row by recursively searching the tree
        } 
        else if (hasChildrenContent) {
            this.addChildrenToRow(row._children, rowName, children);
        }

        return row;
    });

    return newData;
}

}


