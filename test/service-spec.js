describe('Testing promises with mocha', function() {

  var expect = chai.expect;
  var $rootScope, $q, service;

  var returnPromiseFn = function() {
    var dfd = Q.defer();
    dfd.resolve('Regular promise');
    return dfd.promise;    
  };

  beforeEach(module('app'));
  beforeEach(inject(function(_$q_, _service_, _$rootScope_) {
    $q = _$q_;
    service = _service_;
    $rootScope = _$rootScope_;
  }));

  it('should test promises the old way', function() {
    var exp;
    service.load().then(function(data) {
      exp = data;
    });
    $rootScope.$apply();
    expect(exp).to.equal('Hi there');
  });

  it('should test promises using done', function(done) {
    service.load().then(function(data) {
      expect(data).to.equal('Hi there');
    }).then(done, done);
    $rootScope.$apply();
  });

  it('should test regular promises using return - sanity check', function() {
    return returnPromiseFn().should.eventually.equal('Regular promise');
  });


  // the test below fails as this needs next angular 
  // tick to be invoked by $rootScope.$apply();
  // but don't know where to invoke it

  it('should test promises using return - failing test', function() {
    return service.load().then(function(data) {
      expect(data).to.equal('Hi there');
    });
  });

});