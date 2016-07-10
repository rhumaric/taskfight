describe("A test suite", function() {
  beforeEach(function() {
    this.s = sinon.spy();
  });
  afterEach(function() { });
  it('First test', function() {
    expect(this.s).to.have.been.called;
  });

  it('Second test', function () {
    expect(this.s).not.to.have.been.called;
  });
});