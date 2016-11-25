catwalkApp.service('$global.services', [
    'SenseiSchool',
    'SenseiStudent',
    'SenseiKarateclass',
    'UserManagerApplicationAuthority',
    'UserManagerApplicationPersistentToken',
    'UserManagerApplicationUser',
    'UserManagerApplicationUserAuthority',
    'UserManagerAppPassResetToken',
    'Account',
    'AppAPI',
function(
    SenseiSchool,
    SenseiStudent,
    SenseiKarateclass,
    UserManagerApplicationAuthority,
    UserManagerApplicationPersistentToken,
    UserManagerApplicationUser,
    UserManagerApplicationUserAuthority,
    UserManagerAppPassResetToken,
    Account,
    AppAPI
) {
            this.SenseiSchool = SenseiSchool;
            this.SenseiStudent = SenseiStudent;
            this.SenseiKarateclass = SenseiKarateclass;
            this.UserManagerApplicationAuthority = UserManagerApplicationAuthority;
            this.UserManagerApplicationPersistentToken = UserManagerApplicationPersistentToken;
            this.UserManagerApplicationUser = UserManagerApplicationUser;
            this.UserManagerApplicationUserAuthority = UserManagerApplicationUserAuthority;
            this.UserManagerAppPassResetToken = UserManagerAppPassResetToken;
            this.Account = Account;
        this.api = AppAPI;
}
]);
