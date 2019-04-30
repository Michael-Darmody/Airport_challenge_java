
describe('Feature Test:', function() {
  var plane;
  var airport;


  beforeEach(function(){
  plane = new Plane();
  airport = new Airport();
  });

  it('Should be able to land at an airport', function() {
    plane.land(airport);
    expect(aiport.planes()).toContain(plane);
  });
});
