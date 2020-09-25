import { agent as request } from 'supertest';
import * as chai from 'chai';
import 'mocha';
import index from '../src/index';

const expect = chai.expect;
const server = request(index);

describe('API TESTING', () => {

  describe('simple test', () => {
    it('Add 2 and 3', (done) => {
      const a: number = 2;
      const b: number = 3;
      expect(a + b).to.equal(5);
      done();
    });
  });

  describe('get users', () => {
    it('Should fetch all Users', () => {
      return server.get('/api/v1/users')
        .expect(200)
        .then((res) => {
          expect(res.body).to.be.an('array');

        });
    });

  });
});
