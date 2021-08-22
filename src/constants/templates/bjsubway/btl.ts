const params = {
    svg_height: 450,
    padding: 8.750201061605276,
    y_pc: 40,
    branch_spacing: 45,
    theme: ['beijing', 'bj1', '#A4343A', '#fff'],
    direction: 'r',
    current_stn_idx: 'l1mz',
    platform_num: '2',
    stn_list: {
        linestart: {
            parents: [],
            children: ['l1mz'],
            name: ['路綫左端', 'LEFT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        lineend: {
            parents: ['w3nx'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: { left: [], right: [] },
            transfer: { tick_direc: 'r', paid_area: true, osi_names: [], info: [[]] },
            services: ['local'],
            facility: '',
            num: '00',
            secondaryName: false,
        },
        l1mz: {
            parents: ['linestart'],
            children: ['iwf6'],
            name: ['四惠', 'Sihui'],
            branch: { left: [], right: [] },
            num: '02',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['beijing', 'bj1', '#A4343A', '#fff', '1号线', 'Line 1']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['oa29'],
            parents: ['l1mz'],
            name: ['四惠东', 'Sihui Dong(E)'],
            branch: { left: [], right: [] },
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['beijing', 'bj1', '#A4343A', '#fff', '1号线', 'Line 1']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        w3nx: {
            name: ['环球度假区', 'Universal Resort'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['4zh3'],
            children: ['lineend'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj7', '#FFC56E', '#fff', '7号线', 'Line 7']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        oa29: {
            name: ['高碑店', 'Gaobeidian'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['iwf6'],
            children: ['en87'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        en87: {
            name: ['传媒大学', 'Communication\\University of China'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['oa29'],
            children: ['tryx'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        tryx: {
            name: ['双桥', 'Shuang Qiao'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['en87'],
            children: ['erm0'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        erm0: {
            name: ['管庄', 'Guaanzhuang'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['tryx'],
            children: ['yxwq'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        yxwq: {
            name: ['八里桥', 'Bali Qiao'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['erm0'],
            children: ['ljni'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        ljni: {
            name: ['通州北苑', 'Tongzhou Beiyuan'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['yxwq'],
            children: ['kij7'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        kij7: {
            name: ['果园', 'Guoyuan'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['ljni'],
            children: ['k0cd'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        k0cd: {
            name: ['九棵树', 'Jiukeshu'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['kij7'],
            children: ['cs2b'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        cs2b: {
            name: ['梨园', 'Liyuan'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['k0cd'],
            children: ['j6yy'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        j6yy: {
            name: ['临河里', 'Linheli'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['cs2b'],
            children: ['jiqo'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        jiqo: {
            name: ['土桥', 'Tu Qiao'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['j6yy'],
            children: ['4zh3'],
            branch: { left: [], right: [] },
            transfer: { info: [[]], tick_direc: 'r', paid_area: true, osi_names: [] },
            facility: '',
        },
        '4zh3': {
            name: ['花庄', 'Huazhuang'],
            secondaryName: false,
            num: '00',
            services: ['local'],
            parents: ['jiqo'],
            children: ['w3nx'],
            branch: { left: [], right: [] },
            transfer: {
                info: [[['beijing', 'bj7', '#FFC56E', '#fff', '7号线', 'Line 7']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
    },
    line_name: ['八通线', 'Batong Line'],
    psd_num: '1',
    line_num: 'TW',
    info_panel_type: 'gz28',
    direction_gz_x: 50,
    direction_gz_y: 70,
    customiseMTRDest: { isLegacy: false, terminal: false },
    svgWidth: { destination: 2000, runin: 2000, railmap: 2000, indoor: 2000 },
    notesGZMTR: [],
    namePosMTR: { isStagger: true, isFlip: false },
};

export default params;
