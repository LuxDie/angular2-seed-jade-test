describe('Home', function () {
    beforeEach(function () {
        browser.get('/dist/dev');
    });
    it('should have correct h1', function () {
        expect(element(by.css('app section home span.md-headline')).getText())
            .toEqual('Howdy!');
    });
    it('should have correct success msg', function () {
        expect(element(by.css('app section home p')).getText())
            .toEqual('Your deployment of Angular 2 Seed worked perfectly! Click about (above) to get your reward!');
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvY29tcG9uZW50cy9ob21lLmUyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLENBQUMsTUFBTSxFQUFFO0lBRWYsVUFBVSxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtRQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3JFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRTtRQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3RELE9BQU8sQ0FBQyw2RkFBNkYsQ0FBQyxDQUFDO0lBQzVHLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiaG9tZS9jb21wb25lbnRzL2hvbWUuZTJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUoJ0hvbWUnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcclxuICAgIGJyb3dzZXIuZ2V0KCcvZGlzdC9kZXYnKTtcclxuICB9KTtcclxuXHJcbiAgaXQoJ3Nob3VsZCBoYXZlIGNvcnJlY3QgaDEnLCBmdW5jdGlvbigpIHtcclxuICAgICAgZXhwZWN0KGVsZW1lbnQoYnkuY3NzKCdhcHAgc2VjdGlvbiBob21lIHNwYW4ubWQtaGVhZGxpbmUnKSkuZ2V0VGV4dCgpKVxyXG4gICAgICAudG9FcXVhbCgnSG93ZHkhJyk7XHJcbiAgfSk7XHJcblxyXG4gIGl0KCdzaG91bGQgaGF2ZSBjb3JyZWN0IHN1Y2Nlc3MgbXNnJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGV4cGVjdChlbGVtZW50KGJ5LmNzcygnYXBwIHNlY3Rpb24gaG9tZSBwJykpLmdldFRleHQoKSlcclxuICAgICAgLnRvRXF1YWwoJ1lvdXIgZGVwbG95bWVudCBvZiBBbmd1bGFyIDIgU2VlZCB3b3JrZWQgcGVyZmVjdGx5ISBDbGljayBhYm91dCAoYWJvdmUpIHRvIGdldCB5b3VyIHJld2FyZCEnKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==