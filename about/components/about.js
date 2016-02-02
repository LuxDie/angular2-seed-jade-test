var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var people_list_1 = require('../../shared/services/people_list');
var all_1 = require('ng2-material/all');
var AboutCmp = (function () {
    function AboutCmp(list) {
        this.list = list;
    }
    AboutCmp.prototype.addName = function () {
        this.list.add(this.newName);
        this.newName = '';
        return false;
    };
    AboutCmp = __decorate([
        core_1.Component({
            selector: 'about',
            templateUrl: './about/components/about.html',
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES, all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [people_list_1.PeopleList])
    ], AboutCmp);
    return AboutCmp;
})();
exports.AboutCmp = AboutCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0L2NvbXBvbmVudHMvYWJvdXQudHMiXSwibmFtZXMiOlsiQWJvdXRDbXAiLCJBYm91dENtcC5jb25zdHJ1Y3RvciIsIkFib3V0Q21wLmFkZE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBK0MsaUJBQWlCLENBQUMsQ0FBQTtBQUVqRSw0QkFBeUIsbUNBQW1DLENBQUMsQ0FBQTtBQUM3RCxvQkFBa0Msa0JBQWtCLENBQUMsQ0FBQTtBQUVyRDtJQU9FQSxrQkFBbUJBLElBQWdCQTtRQUFoQkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBWUE7SUFBR0EsQ0FBQ0E7SUFLdkNELDBCQUFPQSxHQUFQQTtRQUNFRSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUM1QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDbEJBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2ZBLENBQUNBO0lBaEJIRjtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsT0FBT0E7WUFDakJBLFdBQVdBLEVBQUVBLCtCQUErQkE7WUFDNUNBLFVBQVVBLEVBQUVBLENBQUNBLHdCQUFlQSxFQUFFQSx3QkFBZUEsRUFBRUEseUJBQW1CQSxDQUFDQTtTQUNwRUEsQ0FBQ0E7O2lCQWFEQTtJQUFEQSxlQUFDQTtBQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtBQVpZLGdCQUFRLFdBWXBCLENBQUEiLCJmaWxlIjoiYWJvdXQvY29tcG9uZW50cy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7UGVvcGxlTGlzdH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Blb3BsZV9saXN0JztcclxuaW1wb3J0IHtNQVRFUklBTF9ESVJFQ1RJVkVTfSBmcm9tICduZzItbWF0ZXJpYWwvYWxsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hYm91dC9jb21wb25lbnRzL2Fib3V0Lmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFUywgTUFURVJJQUxfRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFib3V0Q21wIHtcclxuICBuZXdOYW1lOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGxpc3Q6IFBlb3BsZUxpc3QpIHt9XHJcbiAvKlxyXG4gKiBAcGFyYW0gbmV3TmFtZSBhbnkgdGV4dCBhcyBpbnB1dC5cclxuICogQHJldHVybnMgcmV0dXJuIGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlLlxyXG4gKi9cclxuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgdGhpcy5saXN0LmFkZCh0aGlzLm5ld05hbWUpO1xyXG4gICAgdGhpcy5uZXdOYW1lID0gJyc7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==