import { expect } from 'chai';
import { describe, it } from 'mocha';
import validateAccount from '@nano-wallet-company/nano-wallet-desktop/validators/account';

describe('Unit | Validator | account', () => {
  it('passes addresses with cec_ prefix', () => {
    const validator = validateAccount();
    const account = 'cec_3arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjps4';
    expect(validator('account', account)).to.be.true;
  });

  it('passes addresses with nano_ prefix', () => {
    const validator = validateAccount();
    const account = 'nano_3arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjps4';
    expect(validator('account', account)).to.be.true;
  });

  it('fails invalid addresses', () => {
    const validator = validateAccount();
    const values = [
      'xrp_3arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjps4',
      'cec_4arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjps4',
      'cec_3arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjpsl',
      'cec_3arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjpsv',
      'cec_arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjps4',
      'cec_3arg3asgtigae3xckabaaewkx3bzsh7nwz7jkmjos79ihyaxwphhm6qgjps44',
    ];

    values.forEach(v => expect(validator('account', v)).to.not.be.true);
  });
});
