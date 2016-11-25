'use strict';

//  Sensei Student Service
catwalkApp.factory('SenseiStudent', ['SenseiBaseService',function (SenseiBaseService) {
    var entityUrl = SenseiBaseService.getEntityUrl('student');
    return SenseiBaseService.getResource(entityUrl,{},{
        'columns':{method: 'POST', params:{},url:entityUrl + 'columns'},
        'api':{method: 'POST', params:{},url:entityUrl + 'api'},
        'schema':{method: 'POST', params:{},url:entityUrl + 'schema'}
    });
}
]);
