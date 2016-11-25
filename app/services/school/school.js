'use strict';

//  Sensei School Service
catwalkApp.factory('SenseiSchool', ['SenseiBaseService',function (SenseiBaseService) {
    var entityUrl = SenseiBaseService.getEntityUrl('school');
    return SenseiBaseService.getResource(entityUrl,{},{
        'columns':{method: 'POST', params:{},url:entityUrl + 'columns'},
        'api':{method: 'POST', params:{},url:entityUrl + 'api'},
        'schema':{method: 'POST', params:{},url:entityUrl + 'schema'}
    });
}
]);
