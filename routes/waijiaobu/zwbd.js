const template = require('../template_page');

const options = {
    feed_title: '外交部 驻外报道',
    feed_desc: '外交部 驻外报道',
    feed_image: 'http://www.fmprc.gov.cn/web/images/logo.png',
    feed_url: 'http://www.fmprc.gov.cn/web/wjdt_674879/zwbd_674895/',
    url: 'http://www.fmprc.gov.cn/web/wjdt_674879/zwbd_674895/',
    baseUrl: 'http://www.fmprc.gov.cn/web/wjdt_674879/zwbd_674895/',
    list_slr: ['li', '.rebox_news ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_map: function(time) {
        return time.slice(-11, -1);
    },
    cn: false,
};

module.exports = template(options);
