import ExtendableError from 'es6-error';

export default class StoreError extends ExtendableError {

  constructor(message = 'E_STORE') {
    super(message);
  }
}