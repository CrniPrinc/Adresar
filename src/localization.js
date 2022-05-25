import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({

    en: {
        pages: {
           country: {
             pageTitle: 'Countries',
             name: 'Name'
           },
           city:{
            pageTitle: 'Cities',
            name: 'Name'
           },
           serviceFacilities:{
            pageTitle: 'ServiceFacilities',
            name: 'Name'
           }
        },
        components: {
            tablePage: {
                actions: 'Actions'
            },
            actionCell: {
                view: 'View',
                edit: 'Edit',
                delete: 'Delete'
            }
        },
        common: {
            cancel: "Cancel",
            save: "Save"
        }
    }
});

export default strings;
