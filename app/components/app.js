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
var router_1 = require('angular2/router');
var all_1 = require('ng2-material/all');
var home_1 = require('../../home/components/home');
var about_1 = require('../../about/components/about');
var people_list_1 = require('../../shared/services/people_list');
var AppCmp = (function () {
    function AppCmp() {
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            viewProviders: [people_list_1.PeopleList],
            templateUrl: './app/components/app.html',
            styleUrls: ['./app/components/app.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, all_1.MATERIAL_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.HomeCmp, as: 'Home' },
            { path: '/about', component: about_1.AboutCmp, as: 'About' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCx1QkFHTyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pCLG9CQUFrQyxrQkFBa0IsQ0FBQyxDQUFBO0FBRXJELHFCQUFzQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ25ELHNCQUF1Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3RELDRCQUF5QixtQ0FBbUMsQ0FBQyxDQUFBO0FBRTdEO0lBQUFBO0lBWXFCQyxDQUFDQTtJQVp0QkQ7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLGFBQWFBLEVBQUVBLENBQUNBLHdCQUFVQSxDQUFDQTtZQUMzQkEsV0FBV0EsRUFBRUEsMkJBQTJCQTtZQUN4Q0EsU0FBU0EsRUFBRUEsQ0FBQ0EsMEJBQTBCQSxDQUFDQTtZQUN2Q0EsYUFBYUEsRUFBRUEsd0JBQWlCQSxDQUFDQSxJQUFJQTtZQUNyQ0EsVUFBVUEsRUFBRUEsQ0FBQ0EsMEJBQWlCQSxFQUFFQSx5QkFBbUJBLENBQUNBO1NBQ3JEQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsU0FBU0EsRUFBRUEsY0FBT0EsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7WUFDN0NBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGdCQUFRQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtTQUNyREEsQ0FBQ0E7O2VBQ29CQTtJQUFEQSxhQUFDQTtBQUFEQSxDQVpyQixBQVlzQkEsSUFBQTtBQUFULGNBQU0sU0FBRyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgUm91dGVDb25maWcsXHJcbiAgUk9VVEVSX0RJUkVDVElWRVNcclxufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge01BVEVSSUFMX0RJUkVDVElWRVN9IGZyb20gJ25nMi1tYXRlcmlhbC9hbGwnO1xyXG5cclxuaW1wb3J0IHtIb21lQ21wfSBmcm9tICcuLi8uLi9ob21lL2NvbXBvbmVudHMvaG9tZSc7XHJcbmltcG9ydCB7QWJvdXRDbXB9IGZyb20gJy4uLy4uL2Fib3V0L2NvbXBvbmVudHMvYWJvdXQnO1xyXG5pbXBvcnQge1Blb3BsZUxpc3R9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wZW9wbGVfbGlzdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgdmlld1Byb3ZpZGVyczogW1Blb3BsZUxpc3RdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9hcHAuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXBwL2NvbXBvbmVudHMvYXBwLmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBNQVRFUklBTF9ESVJFQ1RJVkVTXVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWVDbXAsIGFzOiAnSG9tZScgfSxcclxuICB7IHBhdGg6ICcvYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q21wLCBhczogJ0Fib3V0JyB9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDbXAge31cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9