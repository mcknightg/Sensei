'use strict';

//  Sensei Karateclass Service
catwalkApp.factory('SenseiKarateclass', ['SenseiBaseService',function (SenseiBaseService) {
    var entityUrl = SenseiBaseService.getEntityUrl('karateclass');
    return SenseiBaseService.getResource(entityUrl,{},{
        'columns':{method: 'POST', params:{},url:entityUrl + 'columns'},
        'api':{method: 'POST', params:{},url:entityUrl + 'api'},
        'schema':{method: 'POST', params:{},url:entityUrl + 'schema'}
    });
}
]);
