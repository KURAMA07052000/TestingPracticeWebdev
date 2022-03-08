const controller = require('../controllers/guestbookControllers.js')


test('responds to /new', () => {
    const req = {};
    const res = {
        text: '',
        send: function (input) { this.text = input }
    };
    controller.new_entry(req, res);
    expect(res.text).toEqual('<h1>Not yet implemented: show a new entry page.</h1>');
})
