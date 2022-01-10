const params = {
    style: 'gzmtr',
    svg_height: 343,
    padding: 4.20352796096724,
    y_pc: 46.63,
    branch_spacing: 45,
    theme: ['saopaulo', 'sp3', '#EE3E34', '#fff'],
    direction: 'l',
    current_stn_idx: 'jr4b',
    platform_num: '3',
    stn_list: {
        linestart: {
            parents: [],
            children: ['qvhm'],
            name: ['路綫左端', 'LEFT END'],
            branch: {
                left: [],
                right: [],
            },
            num: '00',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        lineend: {
            parents: ['jr4b'],
            children: [],
            name: ['路綫右端', 'RIGHT END'],
            branch: {
                left: [],
                right: [],
            },
            num: '19',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        l1mz: {
            parents: ['7ut6'],
            children: ['iwf6'],
            name: ['帕特里亚尔卡', 'Patriarca· Vila Ré '],
            branch: {
                left: [],
                right: [],
            },
            num: '16',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        iwf6: {
            children: ['jr4b'],
            parents: ['l1mz'],
            name: ['阿图尔·阿尔维姆', 'Artur Alvim '],
            branch: {
                left: [],
                right: [],
            },
            num: '17',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '7ut6': {
            branch: {
                left: [],
                right: [],
            },
            parents: ['vsdm'],
            children: ['l1mz'],
            name: ['威廉敏娜 ·埃斯佩兰萨', 'Guilhermina Esperança '],
            num: '15',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        vsdm: {
            branch: {
                left: [],
                right: [],
            },
            parents: ['i1bw'],
            children: ['7ut6'],
            name: ['马蒂尔德镇', 'Vila Matilde '],
            num: '14',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        i1bw: {
            branch: {
                left: [],
                right: [],
            },
            parents: ['xe64'],
            children: ['vsdm'],
            name: ['佩尼亚', 'Penha'],
            num: '13',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['saopaulo', 'sp2', '#008061', '#fff', '2号线', 'Line 2'],
                        ['saopaulo', 'sp11', '#F04D22', '#fff', '11号线', 'Line 11'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        xe64: {
            branch: {
                left: [],
                right: [],
            },
            parents: ['9yva'],
            children: ['i1bw'],
            name: ['卡劳', 'Carrão '],
            num: '12',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '9yva': {
            branch: {
                left: [],
                right: [],
            },
            parents: ['pdpl'],
            children: ['xe64'],
            name: ['塔图阿普', 'Tatuapé '],
            num: '11',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['saopaulo', 'sp11', '#F04D22', '#fff', '11号线', 'Line 11'],
                        ['saopaulo', 'sp12', '#083E89', '#fff', '12号线', 'Line 12'],
                        ['saopaulo', 'sp13', '#00AB5B', '#fff', '13号线', 'Line 13'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        pdpl: {
            branch: {
                left: [],
                right: [],
            },
            parents: ['d157'],
            children: ['9yva'],
            name: ['贝伦', 'Belém '],
            num: '10',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        d157: {
            branch: {
                left: [],
                right: [],
            },
            parents: ['4oo6'],
            children: ['pdpl'],
            name: ['布雷瑟·穆卡', 'Bresser·Mooca '],
            num: '09',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        '4oo6': {
            branch: {
                left: [],
                right: [],
            },
            parents: ['tucs'],
            children: ['d157'],
            name: ['圣布拉什', 'Brás '],
            num: '08',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['saopaulo', 'sp7', '#9E1766', '#fff', '7号线', 'Line 7'],
                        ['saopaulo', 'sp10', '#007C8F', '#fff', '10号线', 'Line 10'],
                        ['saopaulo', 'sp11', '#F04D22', '#fff', '11号线', 'Line 11'],
                        ['saopaulo', 'sp12', '#083E89', '#fff', '12号线', 'Line 12'],
                        ['saopaulo', 'sp13', '#00AB5B', '#fff', '13号线', 'Line 13'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        ocmo: {
            branch: {
                left: [],
                right: [],
            },
            parents: ['ggt8'],
            children: ['tucs'],
            name: ['瑟', 'Sé '],
            num: '06',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['saopaulo', 'sp1', '#0153A0', '#fff', '1号线', 'Line 1']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        ggt8: {
            branch: {
                left: [],
                right: [],
            },
            parents: ['ttr8'],
            children: ['ocmo'],
            name: ['安亚卡巴乌', 'Anhangabaú '],
            num: '05',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [['香港', 'Hong Kong']],
                info: [
                    [],
                    [
                        ['hongkong', 'tcl', '#F38B00', '#fff', '東涌綫', 'Tung Chung Line'],
                        ['hongkong', 'ael', '#007078', '#fff', '機場快綫', 'Airport Express'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        ttr8: {
            branch: {
                left: [],
                right: [],
            },
            parents: ['eats'],
            children: ['ggt8'],
            name: ['共和国', 'República '],
            num: '04',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[['saopaulo', 'sp4', '#FED304', '#000', '4号线', 'Line 4']]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        eats: {
            branch: {
                left: [],
                right: [],
            },
            parents: ['q0jw'],
            children: ['ttr8'],
            name: ['圣塞西莉亚', 'Santa Cecília '],
            num: '03',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        q0jw: {
            branch: {
                left: [],
                right: [],
            },
            parents: ['qvhm'],
            children: ['eats'],
            name: ['德奥多罗元帅', 'Mal. Deodoro '],
            num: '02',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [[]],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        qvhm: {
            branch: {
                left: [],
                right: [],
            },
            parents: ['linestart'],
            children: ['q0jw'],
            name: ['彭美拉斯·巴拉丰达', 'Palmeiras·Barra Funda '],
            num: '01',
            transfer: {
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
                info: [
                    [
                        ['saopaulo', 'sp7', '#9E1766', '#fff', '7号线', 'Line 7'],
                        ['saopaulo', 'sp8', '#9E9E93', '#fff', '8号线', 'Line 8'],
                        ['saopaulo', 'sp13', '#00AB5B', '#fff', '13号线', 'Line 13'],
                    ],
                ],
            },
            services: ['local'],
            facility: '',
            secondaryName: false,
        },
        jr4b: {
            name: ['哥林多·伊塔奎拉', 'Corinthians·Itaquera '],
            secondaryName: false,
            num: '18',
            services: ['local'],
            parents: ['iwf6'],
            children: ['lineend'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[['saopaulo', 'sp11', '#F04D22', '#fff', '11号线', 'Line 11']]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
        tucs: {
            name: ['佩德罗二世', 'Pedro II '],
            secondaryName: false,
            num: '07',
            services: ['local'],
            parents: ['ocmo'],
            children: ['4oo6'],
            branch: {
                left: [],
                right: [],
            },
            transfer: {
                info: [[]],
                tick_direc: 'r',
                paid_area: true,
                osi_names: [],
            },
            facility: '',
        },
    },
    line_name: ['3号线', 'Line 3'],
    psd_num: '11',
    line_num: '3',
    info_panel_type: 'gz1421',
    direction_gz_x: 67.94,
    direction_gz_y: 78.17,
    customiseMTRDest: {
        isLegacy: false,
        terminal: false,
    },
    svgWidth: {
        destination: 1000,
        runin: 1000,
        railmap: 1510,
        indoor: 1200,
    },
    notesGZMTR: [['十三号线暂未开通', 'Line 13 is under construction', 7.5, 83.5, true]],
    namePosMTR: {
        isStagger: true,
        isFlip: false,
    },
};

export default params;
