const date = new Date();
let y;
let m;
let d;
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const today = document.querySelector(".today");
const getToday = () => {
    y = date.getFullYear();
    m = date.getMonth();
    d = date.getDate();
    today.textContent = y + " / " + month[m] + " / " + d;
};
getToday();
let day = "";
const addDay = () => {
    d++;
    if ((m == 1 && d == 29) || (d == 31 && (m == 3 || m == 5 || m == 8 || m == 10)) || d == 32) {
        d = 1;
        m++;
        if (m == 12) {
            m = 0;
            y++;
        };
    };
    day = y + " / " + month[m] + " / " + d;
};
const games = document.querySelectorAll(".game");
const printDay = () => {
    for (let i = 0; i < 4; i++) {
        addDay();
        timetable.quarter.push(day);
    };
    document.querySelectorAll('#qrtrFinal .date').forEach(g => g.textContent = timetable.quarter[Math.floor(Math.random() * timetable.quarter.length)]);
    for (let i = 0; i < 3; i++) {
        addDay();
        timetable.semi.push(day);
    };
    document.querySelectorAll('#semiFinal .date').forEach(g => g.textContent = timetable.semi[Math.floor(Math.random() * timetable.semi.length)]);
    for (let i = 0; i < 3; i++) {
        addDay();
        timetable.medal.push(day);
    };
    document.querySelector('#bronzeFinal .date').textContent = timetable.medal[0]
    document.querySelector('#goldFinal .date').textContent = timetable.medal[1]
    getToday();
};
const teams = {
    names: ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BIH', 'BWA', 'BRA', 'IOT', 'VGB', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COK', 'CRI', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'COD', 'DNK', 'DJI', 'DMA', 'DOM', 'TLS', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'CIV', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'XXK', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'PRK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'COG', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'KOR', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'VIR', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'URY', 'UZB', 'VUT', 'VAT', 'VEN', 'VNM', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'],
    flags: ['🇦🇫', '🇦🇽', '🇦🇱', '🇩🇿', '🇦🇸', '🇦🇩', '🇦🇴', '🇦🇮', '🇦🇶', '🇦🇬', '🇦🇷', '🇦🇲', '🇦🇼', '🇦🇺', '🇦🇹', '🇦🇿', '🇧🇸', '🇧🇭', '🇧🇩', '🇧🇧', '🇧🇾', '🇧🇪', '🇧🇿', '🇧🇯', '🇧🇲', '🇧🇹', '🇧🇴', '🇧🇦', '🇧🇼', '🇧🇷', '🇮🇴', '🇻🇬', '🇧🇳', '🇧🇬', '🇧🇫', '🇧🇮', '🇰🇭', '🇨🇲', '🇨🇦', '🇨🇻', '🇰🇾', '🇨🇫', '🇹🇩', '🇨🇱', '🇨🇳', '🇨🇽', '🇨🇨', '🇨🇴', '🇰🇲', '🇨🇰', '🇨🇷', '🇭🇷', '🇨🇺', '🇨🇼', '🇨🇾', '🇨🇿', '🇨🇩', '🇩🇰', '🇩🇯', '🇩🇲', '🇩🇴', '🇹🇱', '🇪🇨', '🇪🇬', '🇸🇻', '🇬🇶', '🇪🇷', '🇪🇪', '🇪🇹', '🇫🇰', '🇫🇴', '🇫🇯', '🇫🇮', '🇫🇷', '🇬🇫', '🇵🇫', '🇹🇫', '🇬🇦', '🇬🇲', '🇬🇪', '🇩🇪', '🇬🇭', '🇬🇮', '🇬🇷', '🇬🇱', '🇬🇩', '🇬🇵', '🇬🇺', '🇬🇹', '🇬🇬', '🇬🇳', '🇬🇼', '🇬🇾', '🇭🇹', '🇭🇳', '🇭🇰', '🇭🇺', '🇮🇸', '🇮🇳', '🇮🇩', '🇮🇷', '🇮🇶', '🇮🇪', '🇮🇲', '🇮🇱', '🇮🇹', '🇨🇮', '🇯🇲', '🇯🇵', '🇯🇪', '🇯🇴', '🇰🇿', '🇰🇪', '🇰🇮', '🇽🇰', '🇰🇼', '🇰🇬', '🇱🇦', '🇱🇻', '🇱🇧', '🇱🇸', '🇱🇷', '🇱🇾', '🇱🇮', '🇱🇹', '🇱🇺', '🇲🇴', '🇲🇰', '🇲🇬', '🇲🇼', '🇲🇾', '🇲🇻', '🇲🇱', '🇲🇹', '🇲🇭', '🇲🇶', '🇲🇷', '🇲🇺', '🇾🇹', '🇲🇽', '🇫🇲', '🇲🇩', '🇲🇨', '🇲🇳', '🇲🇪', '🇲🇸', '🇲🇦', '🇲🇿', '🇲🇲', '🇳🇦', '🇳🇷', '🇳🇵', '🇳🇱', '🇳🇨', '🇳🇿', '🇳🇮', '🇳🇪', '🇳🇬', '🇳🇺', '🇳🇫', '🇰🇵', '🇲🇵', '🇳🇴', '🇴🇲', '🇵🇰', '🇵🇼', '🇵🇸', '🇵🇦', '🇵🇬', '🇵🇾', '🇵🇪', '🇵🇭', '🇵🇳', '🇵🇱', '🇵🇹', '🇵🇷', '🇶🇦', '🇨🇬', '🇷🇴', '🇷🇺', '🇷🇼', '🇧🇱', '🇸🇭', '🇰🇳', '🇱🇨', '🇵🇲', '🇻🇨', '🇼🇸', '🇸🇲', '🇸🇹', '🇸🇦', '🇸🇳', '🇷🇸', '🇸🇨', '🇸🇱', '🇸🇬', '🇸🇽', '🇸🇰', '🇸🇮', '🇸🇧', '🇸🇴', '🇿🇦', '🇬🇸', '🇰🇷', '🇸🇸', '🇪🇸', '🇱🇰', '🇸🇩', '🇸🇷', '🇸🇿', '🇸🇪', '🇨🇭', '🇸🇾', '🇹🇼', '🇹🇯', '🇹🇿', '🇹🇭', '🇹🇬', '🇹🇰', '🇹🇴', '🇹🇹', '🇹🇳', '🇹🇷', '🇹🇲', '🇹🇨', '🇹🇻', '🇻🇮', '🇺🇬', '🇺🇦', '🇦🇪', '🇬🇧', '🇺🇸', '🇺🇾', '🇺🇿', '🇻🇺', '🇻🇦', '🇻🇪', '🇻🇳', '🇼🇫', '🇪🇭', '🇾🇪', '🇿🇲', '🇿🇼']
};
const printTeam = () => {
    const qTeams = document.querySelectorAll('#qrtrFinal .game .team .name');
    qTeams.forEach(n => {
        const i = Math.floor(Math.random() * teams.names.length);
        n.textContent = teams.flags.splice(i, 1) + " " + teams.names.splice(i, 1);
    });
};
const match = (g) => {
    a = Math.floor(Math.random() * 6);
    g.querySelector(".team1 .score").textContent = a;
    b = Math.floor(Math.random() * 6);
    if (a == b)
        while (a == b) { b = Math.floor(Math.random() * 6) };
    g.querySelector(".team2 .score").textContent = b;
    a > b ? g.querySelector('.team1').classList.add('win') : g.querySelector('.team2').classList.add('win');
    if (g.id == 'qG1') {
        document.querySelector('#sG1 .team1 .name').textContent = g.querySelector('.win .name').textContent;
    } else if (g.id == 'qG2') {
        document.querySelector('#sG1 .team2 .name').textContent = g.querySelector('.win .name').textContent;
    } else if (g.id == 'qG3') {
        document.querySelector('#sG2 .team1 .name').textContent = g.querySelector('.win .name').textContent;
    } else if (g.id == 'qG4') {
        document.querySelector('#sG2 .team2 .name').textContent = g.querySelector('.win .name').textContent;
    } else if (g.id == 'sG1') {
        const te = g.querySelectorAll('.team');
        te.forEach(t => t.classList.contains('win') ? document.querySelector('#gG .team1 .name').textContent = t.querySelector('.name').textContent : document.querySelector('#bG .team1 .name').textContent = t.querySelector('.name').textContent);
    } else if (g.id == 'sG2') {
        const te = g.querySelectorAll('.team');
        te.forEach(t => t.classList.contains('win') ? document.querySelector('#gG .team2 .name').textContent = t.querySelector('.name').textContent : document.querySelector('#bG .team2 .name').textContent = t.querySelector('.name').textContent);
    } else if (g.id == 'bG') {
        medal.bronze = g.querySelector('.win .name').textContent;
    } else if (g.id == 'gG') {
        const te = g.querySelectorAll('.team');
        te.forEach(t => {
            if (t.classList.contains('win')) {
                medal.gold = t.querySelector('.name').textContent;
            } else {
                medal.silver = t.querySelector('.name').textContent;
                t.classList.add('loose')
            };
        });
    };
};
const medal = {
    gold: '',
    silver: '',
    bronze: ''
};
const timetable = {
    quarter: [],
    semi: [],
    medal: []
};
const simulate = () => {
    const yesterday = today.textContent;
    addDay();
    today.textContent = day;
    timetable.quarter.forEach(d => {
        if (d == day) {
            document.querySelector('#qrtrFinal').classList.add('active');
            document.querySelector('#semiFinal').classList.remove('active');
            document.querySelector('#bronzeFinal').classList.remove('active');
            document.querySelector('#goldFinal').classList.remove('active');
        };
    });
    timetable.semi.forEach(d => {
        if (d == day) {
            document.querySelector('#qrtrFinal').classList.remove('active');
            document.querySelector('#semiFinal').classList.add('active');
            document.querySelector('#bronzeFinal').classList.remove('active');
            document.querySelector('#goldFinal').classList.remove('active');
        };
    });
    if (timetable.medal[0] == day) {
        document.querySelector('#qrtrFinal').classList.remove('active');
        document.querySelector('#semiFinal').classList.remove('active');
        document.querySelector('#bronzeFinal').classList.add('active');
        document.querySelector('#goldFinal').classList.remove('active');
    }
    if (timetable.medal[1] == day) {
        document.querySelector('#qrtrFinal').classList.remove('active');
        document.querySelector('#semiFinal').classList.remove('active');
        document.querySelector('#bronzeFinal').classList.remove('active');
        document.querySelector('#goldFinal').classList.add('active');
    }
    games.forEach(g => { if (g.classList.contains('active')) g.classList.remove('active') });
    games.forEach(g => { if (g.querySelector(".date").textContent == today.textContent) g.classList.add('active') });
    games.forEach(g => { if (g.querySelector(".date").textContent == yesterday) match(g) });
    if (today.textContent == timetable.medal[2]) {
        clearInterval(play);
        const result = document.createElement('div');
        document.body.append(result);
        result.className = 'result';
        result.innerHTML = `<h1>Medal winners</h1><h3>🏆 🥇  Gold medal: ${medal.gold}</h3><h3>🥈  Silver medal: ${medal.silver}</h3><h3>🥉  Bronze medal: ${medal.bronze}</h3><button class="ok">OK</button>`
        document.querySelector('.ok').onclick = () => {
            document.querySelector('.result').remove();
            document.querySelector("#start").textContent = 'Simulate';
            timetable.quarter = [];
            timetable.semi = [];
            timetable.medal = [];
            teams.names = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BIH', 'BWA', 'BRA', 'IOT', 'VGB', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COK', 'CRI', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'COD', 'DNK', 'DJI', 'DMA', 'DOM', 'TLS', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'CIV', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'XXK', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'PRK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'COG', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'KOR', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'VIR', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'URY', 'UZB', 'VUT', 'VAT', 'VEN', 'VNM', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];
            teams.flags = ['🇦🇫', '🇦🇽', '🇦🇱', '🇩🇿', '🇦🇸', '🇦🇩', '🇦🇴', '🇦🇮', '🇦🇶', '🇦🇬', '🇦🇷', '🇦🇲', '🇦🇼', '🇦🇺', '🇦🇹', '🇦🇿', '🇧🇸', '🇧🇭', '🇧🇩', '🇧🇧', '🇧🇾', '🇧🇪', '🇧🇿', '🇧🇯', '🇧🇲', '🇧🇹', '🇧🇴', '🇧🇦', '🇧🇼', '🇧🇷', '🇮🇴', '🇻🇬', '🇧🇳', '🇧🇬', '🇧🇫', '🇧🇮', '🇰🇭', '🇨🇲', '🇨🇦', '🇨🇻', '🇰🇾', '🇨🇫', '🇹🇩', '🇨🇱', '🇨🇳', '🇨🇽', '🇨🇨', '🇨🇴', '🇰🇲', '🇨🇰', '🇨🇷', '🇭🇷', '🇨🇺', '🇨🇼', '🇨🇾', '🇨🇿', '🇨🇩', '🇩🇰', '🇩🇯', '🇩🇲', '🇩🇴', '🇹🇱', '🇪🇨', '🇪🇬', '🇸🇻', '🇬🇶', '🇪🇷', '🇪🇪', '🇪🇹', '🇫🇰', '🇫🇴', '🇫🇯', '🇫🇮', '🇫🇷', '🇬🇫', '🇵🇫', '🇹🇫', '🇬🇦', '🇬🇲', '🇬🇪', '🇩🇪', '🇬🇭', '🇬🇮', '🇬🇷', '🇬🇱', '🇬🇩', '🇬🇵', '🇬🇺', '🇬🇹', '🇬🇬', '🇬🇳', '🇬🇼', '🇬🇾', '🇭🇹', '🇭🇳', '🇭🇰', '🇭🇺', '🇮🇸', '🇮🇳', '🇮🇩', '🇮🇷', '🇮🇶', '🇮🇪', '🇮🇲', '🇮🇱', '🇮🇹', '🇨🇮', '🇯🇲', '🇯🇵', '🇯🇪', '🇯🇴', '🇰🇿', '🇰🇪', '🇰🇮', '🇽🇰', '🇰🇼', '🇰🇬', '🇱🇦', '🇱🇻', '🇱🇧', '🇱🇸', '🇱🇷', '🇱🇾', '🇱🇮', '🇱🇹', '🇱🇺', '🇲🇴', '🇲🇰', '🇲🇬', '🇲🇼', '🇲🇾', '🇲🇻', '🇲🇱', '🇲🇹', '🇲🇭', '🇲🇶', '🇲🇷', '🇲🇺', '🇾🇹', '🇲🇽', '🇫🇲', '🇲🇩', '🇲🇨', '🇲🇳', '🇲🇪', '🇲🇸', '🇲🇦', '🇲🇿', '🇲🇲', '🇳🇦', '🇳🇷', '🇳🇵', '🇳🇱', '🇳🇨', '🇳🇿', '🇳🇮', '🇳🇪', '🇳🇬', '🇳🇺', '🇳🇫', '🇰🇵', '🇲🇵', '🇳🇴', '🇴🇲', '🇵🇰', '🇵🇼', '🇵🇸', '🇵🇦', '🇵🇬', '🇵🇾', '🇵🇪', '🇵🇭', '🇵🇳', '🇵🇱', '🇵🇹', '🇵🇷', '🇶🇦', '🇨🇬', '🇷🇴', '🇷🇺', '🇷🇼', '🇧🇱', '🇸🇭', '🇰🇳', '🇱🇨', '🇵🇲', '🇻🇨', '🇼🇸', '🇸🇲', '🇸🇹', '🇸🇦', '🇸🇳', '🇷🇸', '🇸🇨', '🇸🇱', '🇸🇬', '🇸🇽', '🇸🇰', '🇸🇮', '🇸🇧', '🇸🇴', '🇿🇦', '🇬🇸', '🇰🇷', '🇸🇸', '🇪🇸', '🇱🇰', '🇸🇩', '🇸🇷', '🇸🇿', '🇸🇪', '🇨🇭', '🇸🇾', '🇹🇼', '🇹🇯', '🇹🇿', '🇹🇭', '🇹🇬', '🇹🇰', '🇹🇴', '🇹🇹', '🇹🇳', '🇹🇷', '🇹🇲', '🇹🇨', '🇹🇻', '🇻🇮', '🇺🇬', '🇺🇦', '🇦🇪', '🇬🇧', '🇺🇸', '🇺🇾', '🇺🇿', '🇻🇺', '🇻🇦', '🇻🇪', '🇻🇳', '🇼🇫', '🇪🇭', '🇾🇪', '🇿🇲', '🇿🇼'];
        };
    };
};
document.querySelector("#start").addEventListener("click", event => {
    if (event.target.textContent == 'Simulate') {
        event.target.textContent = 'Pause';
        getToday();
        printDay();
        if (document.querySelector('.win') != null) document.querySelectorAll('.win').forEach(g => g.classList.remove('win'));
        if (document.querySelector('.loose') != null) document.querySelectorAll('.loose').forEach(g => g.classList.remove('loose'));
        document.querySelectorAll('.score').forEach(e => { e.textContent = '-' });
        document.querySelectorAll('.name').forEach(e => { e.textContent = 'team' });
        printTeam();
        play = setInterval(() => simulate(), 1000);
    } else if (event.target.textContent == 'Pause') {
        event.target.textContent = 'Resume';
        clearInterval(play);
    } else if (event.target.textContent == 'Resume') {
        event.target.textContent = 'Pause';
        play = setInterval(() => simulate(), 1000);
    };
});