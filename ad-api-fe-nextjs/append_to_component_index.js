import { existsSync, access, constants, appendFile } from 'fs';
import { resolve } from 'path';

const addComponent = (componentName) => {
    const indexFilePath = 'components/index.js';
    const componentPath = `./${componentName}.jsx`;
    const exportStatement = `export {default as ${componentName}} from '${componentPath}';\n`;

    access(indexFilePath, constants.R_OK | constants.W_OK, (err) => {
        console.log(`Can read and write? ${!err}`);
    });

    appendFile(indexFilePath, exportStatement, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Successfully added ${componentName} to index.js`);
        }
    });
}

addComponent('DashboardSelector');
addComponent('ProfileOperationModal');
addComponent('UserDashboardCardButton');