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

test('landing page renders', () => {
    const req = {}
    const res = {render: jest.fn()}
    controller.landing_page(req, res)
    expect(res.sender.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('entries');
})






