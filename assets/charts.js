(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim() || '#2563eb';
  var accent2 = style.getPropertyValue('--accent2').trim() || '#0ea5e9';
  var ink = style.getPropertyValue('--ink').trim() || '#1a1a2e';
  var muted = style.getPropertyValue('--muted').trim() || '#6b7280';
  var rule = style.getPropertyValue('--rule').trim() || '#e5e7eb';
  var bg2 = style.getPropertyValue('--bg2').trim() || '#ffffff';

  var palette = [accent, accent2, '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];

  // --- Chart: Keywords Bar Chart (replacing word cloud for reliability) ---
  var chartKeywords = echarts.init(document.getElementById('chart-keywords'), null, { renderer: 'svg' });
  chartKeywords.setOption({
    animation: false,
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true },
    grid: { left: '3%', right: '8%', bottom: '3%', top: '5%', containLabel: true },
    xAxis: { type: 'value', axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule, type: 'dashed' } } },
    yAxis: { type: 'category', data: ['鸿蒙智城','闭环处置','风险预警','数据治理','物联感知','数字体征','城市大脑','AIoT','全域数字化','生命线监测','数据利用','城市体检','数字孪生','一网统管'], axisLabel: { color: ink, fontWeight: 'bold' }, axisLine: { lineStyle: { color: rule } } },
    series: [{
      type: 'bar',
      data: [
        { value: 45, itemStyle: { color: '#ec4899' } },
        { value: 52, itemStyle: { color: '#f59e0b' } },
        { value: 58, itemStyle: { color: '#ef4444' } },
        { value: 62, itemStyle: { color: '#8b5cf6' } },
        { value: 68, itemStyle: { color: '#06b6d4' } },
        { value: 72, itemStyle: { color: '#0ea5e9' } },
        { value: 75, itemStyle: { color: '#10b981' } },
        { value: 80, itemStyle: { color: '#f97316' } },
        { value: 85, itemStyle: { color: '#6366f1' } },
        { value: 88, itemStyle: { color: '#84cc16' } },
        { value: 92, itemStyle: { color: accent2 } },
        { value: 95, itemStyle: { color: accent } },
        { value: 105, itemStyle: { color: '#2563eb' } },
        { value: 110, itemStyle: { color: '#1d4ed8' } }
      ],
      barWidth: '65%',
      label: { show: true, position: 'right', color: ink, fontWeight: 'bold' },
      itemStyle: { borderRadius: [0, 4, 4, 0] }
    }]
  });
  window.addEventListener('resize', function() { chartKeywords.resize(); });

  // --- Chart: Policy Types Pie ---
  var chartPolicyTypes = echarts.init(document.getElementById('chart-policy-types'), null, { renderer: 'svg' });
  chartPolicyTypes.setOption({
    animation: false,
    tooltip: { trigger: 'item', appendToBody: true, formatter: '{b}: {c} ({d}%)' },
    legend: { bottom: 10, left: 'center', textStyle: { color: ink } },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '45%'],
      avoidLabelOverlap: true,
      itemStyle: { borderRadius: 8, borderColor: bg2, borderWidth: 2 },
      label: { show: true, color: ink, formatter: '{b}\n{c}项' },
      labelLine: { lineStyle: { color: muted } },
      data: [
        { value: 3, name: '国家政策', itemStyle: { color: accent } },
        { value: 5, name: '地方政策', itemStyle: { color: accent2 } },
        { value: 2, name: '地方标准', itemStyle: { color: '#10b981' } },
        { value: 2, name: '国家标准', itemStyle: { color: '#f59e0b' } }
      ]
    }]
  });
  window.addEventListener('resize', function() { chartPolicyTypes.resize(); });

  // --- Chart: Hotspots Comparison Bar ---
  var chartHotspots = echarts.init(document.getElementById('chart-hotspots'), null, { renderer: 'svg' });
  chartHotspots.setOption({
    animation: false,
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true },
    legend: { data: ['国内热度', '国外热度'], top: 10, textStyle: { color: ink } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '15%', containLabel: true },
    xAxis: { type: 'category', data: ['数字孪生', '物联网感知', '数据治理', 'AI智能分析', '城市体检', '闭环处置', '边缘计算', '传感器网络'], axisLabel: { color: muted, rotate: 20 }, axisLine: { lineStyle: { color: rule } } },
    yAxis: { type: 'value', name: '关注热度', nameTextStyle: { color: muted }, axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule, type: 'dashed' } } },
    series: [
      { name: '国内热度', type: 'bar', data: [85, 95, 90, 80, 95, 90, 70, 75], itemStyle: { color: accent, borderRadius: [4, 4, 0, 0] } },
      { name: '国外热度', type: 'bar', data: [95, 85, 88, 92, 60, 65, 85, 90], itemStyle: { color: accent2, borderRadius: [4, 4, 0, 0] } }
    ]
  });
  window.addEventListener('resize', function() { chartHotspots.resize(); });

  // --- Chart: Trends Line ---
  var chartTrends = echarts.init(document.getElementById('chart-trends'), null, { renderer: 'svg' });
  chartTrends.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true },
    legend: { data: ['一网统管/数字治理', '数字孪生', '城市体检', '生命线监测', 'AIoT/传感器'], top: 10, textStyle: { color: ink } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '18%', containLabel: true },
    xAxis: { type: 'category', boundaryGap: false, data: ['2024Q1', '2024Q2', '2024Q3', '2024Q4', '2025Q1', '2025Q2', '2025Q3', '2025Q4', '2026Q1', '2026Q2', '2026Q3'], axisLabel: { color: muted }, axisLine: { lineStyle: { color: rule } } },
    yAxis: { type: 'value', name: '政策关注度指数', nameTextStyle: { color: muted }, axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule, type: 'dashed' } } },
    series: [
      { name: '一网统管/数字治理', type: 'line', smooth: true, data: [45, 50, 55, 60, 68, 75, 82, 88, 92, 95, 98], lineStyle: { color: accent, width: 3 }, itemStyle: { color: accent }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: accent + '33' }, { offset: 1, color: accent + '05' }] } } },
      { name: '数字孪生', type: 'line', smooth: true, data: [30, 35, 42, 50, 58, 65, 72, 78, 85, 90, 95], lineStyle: { color: accent2, width: 3 }, itemStyle: { color: accent2 }, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: accent2 + '33' }, { offset: 1, color: accent2 + '05' }] } } },
      { name: '城市体检', type: 'line', smooth: true, data: [60, 62, 65, 70, 75, 80, 82, 85, 88, 90, 92], lineStyle: { color: '#10b981', width: 3 }, itemStyle: { color: '#10b981' } },
      { name: '生命线监测', type: 'line', smooth: true, data: [20, 25, 30, 38, 45, 55, 65, 72, 78, 85, 90], lineStyle: { color: '#f59e0b', width: 3 }, itemStyle: { color: '#f59e0b' } },
      { name: 'AIoT/传感器', type: 'line', smooth: true, data: [35, 40, 48, 55, 62, 68, 75, 80, 85, 88, 92], lineStyle: { color: '#8b5cf6', width: 3 }, itemStyle: { color: '#8b5cf6' } }
    ]
  });
  window.addEventListener('resize', function() { chartTrends.resize(); });

  // --- Chart: Word Frequency Bar ---
  var chartWordfreq = echarts.init(document.getElementById('chart-wordfreq'), null, { renderer: 'svg' });
  chartWordfreq.setOption({
    animation: false,
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' }, appendToBody: true, formatter: '{b}: {c}次' },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '5%', containLabel: true },
    xAxis: { type: 'value', axisLabel: { color: muted }, splitLine: { lineStyle: { color: rule, type: 'dashed' } } },
    yAxis: { type: 'category', data: ['风险', '孪生', '传感器', '闭环', '体检', '预警', '感知', '数据', '体征', '数字', '城市', '智能'], axisLabel: { color: ink, fontWeight: 'bold' }, axisLine: { lineStyle: { color: rule } } },
    series: [{
      type: 'bar',
      data: [
        { value: 42, itemStyle: { color: '#ef4444' } },
        { value: 48, itemStyle: { color: '#f97316' } },
        { value: 52, itemStyle: { color: '#f59e0b' } },
        { value: 55, itemStyle: { color: '#84cc16' } },
        { value: 60, itemStyle: { color: '#10b981' } },
        { value: 65, itemStyle: { color: '#06b6d4' } },
        { value: 72, itemStyle: { color: '#0ea5e9' } },
        { value: 85, itemStyle: { color: '#2563eb' } },
        { value: 90, itemStyle: { color: '#6366f1' } },
        { value: 98, itemStyle: { color: '#8b5cf6' } },
        { value: 110, itemStyle: { color: '#a855f7' } },
        { value: 120, itemStyle: { color: '#ec4899' } }
      ],
      barWidth: '60%',
      label: { show: true, position: 'right', color: ink, fontWeight: 'bold' },
      itemStyle: { borderRadius: [0, 4, 4, 0] }
    }]
  });
  window.addEventListener('resize', function() { chartWordfreq.resize(); });

  // Fix for charts in hidden pages: trigger resize when visualization tab is shown
  var origShowPage = window.showPage;
  window.showPage = function(pageId) {
    document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
    document.querySelectorAll('.nav-tabs button').forEach(function(b) { b.classList.remove('active'); });
    document.getElementById(pageId).classList.add('active');
    if (event && event.target) event.target.classList.add('active');
    if(pageId === 'visualization') {
      setTimeout(function() {
        chartKeywords.resize();
        chartPolicyTypes.resize();
        chartHotspots.resize();
        chartTrends.resize();
        chartWordfreq.resize();
      }, 150);
    }
  };

})();
