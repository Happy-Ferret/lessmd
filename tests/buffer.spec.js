var Buffer = require('../lib/buffer').Buffer;
var Vector = require('../lib/buffer').Vector;
var expect = require('chai').expect;


describe('Testing Buffer object', function() {
  var term = new Vector(20,30);
  var cursor = new Vector(0,0);
  var data = 'hello\nworld';

  it ('should be exist', function() {
    expect(Buffer).not.to.be.an('undefined');
  });

  it('should be created without errors', function() {

    expect(term).to.be.an('object');
    expect(cursor).to.be.an('object');
    expect(data).to.be.a('string');

    var buffer = new Buffer(term, cursor, data);

    expect(buffer).to.be.an('object');
  });

  it('sould buffer be filled externally', function() {
    var buffer = new Buffer(term, cursor);

    expect(buffer).to.be.an('object');

    buffer.fillBuffer(data);

    expect(buffer.buffer).to.be.an('array');
    expect(buffer.buffer.length).to.be.equal(2);
  });

  it('should render an array', function() {
    var buffer = new Buffer(term,cursor, data);

    expect(buffer).to.be.an('object');

    expect(buffer.render()).to.be.an('array');
    expect(buffer.render()).to.be.eql(['hello', 'world']);
  });


  it('should handle its dimensions', function() {
    var str = '12\n1234\n22';
    var buffer = new Buffer(term, cursor, str);

    expect(buffer.maxWidth()).to.be.equal(4);
    expect(buffer.maxHeight()).to.be.equal(3);
  });

});


