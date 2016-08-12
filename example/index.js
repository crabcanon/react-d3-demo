import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BarChart from 'd3-bar'
import CircleChart from 'd3-circle'
import DotChart from 'd3-dot'
import HeatmapChart from 'd3-heatmap'
import LineChart from 'd3-line'
import SeriesChart from 'd3-series'
import Tip from 'd3-tipy'
import d3 from 'd3'

const genBarData = n => {
  const data = []

  for (var i = n; i; i--) {
    data.push({
      bin: new Date(Date.now() - (i * 3600000)),
      value: Math.max(250, Math.random() * 3000 | 0)
    })
  }

  return data
}

const genCircleData = () => {
  return { value: Math.random() }
}

const genDotData = n => {
  const data = []

  for (var i = n; i; i--) {
   data.push({
     bin: new Date(Date.now() - (i * 3600000)),
     value: Math.random() * 5 | 0
   })
  }

  return data
}

const geny = n => {
  const data = []

  for (var i = 0; i < n; i++) {
    data.push({
      bin: i * 150,
      count: Math.random() * (25 * (n - i))
    })
  }

  return data
}

const genHeatmapData = (x, y) => {
  const data = []

  for (var i = 0; i < x; i++) {
    data.push({
      bin: i,
      bins: geny(y)
    })
  }

  return data
}

const genLineData = n => {
  const data = []

  for (var i = 0; i < n; i++) {
    data.push({
      time: new Date(Date.now() - (i * 3600000)),
      value: Math.max(250, Math.random() * 3000 | 0)
    })
  }

  return data
}

const genSeriesData = n => {
  const ok = []
  const client = []
  const server = []
  const net = []

  for (var i = 0; i < n; i++) {
    const rnd = Math.random()
    const time = new Date(Date.now() + (i * 3600000))
    const value = Math.random() * 5 | 0

    if (rnd > .9) {
      net.push({ time, value })
      server.push({ time, value: 0 })
      client.push({ time, value: 0 })
      ok.push({ time, value: 0 })
    } else if (rnd > .8) {
      server.push({ time, value })
      net.push({ time, value: 0 })
      client.push({ time, value: 0 })
      ok.push({ time, value: 0 })
    } else if (rnd > .6) {
      client.push({ time, value })
      server.push({ time, value: 0 })
      net.push({ time, value: 0 })
      ok.push({ time, value: 0 })
    } else {
      ok.push({ time, value })
      server.push({ time, value: 0 })
      client.push({ time, value: 0 })
      net.push({ time, value: 0 })
    }
  }

  return [
    { name: 'Series 1st', type: 'success', data: ok },
    { name: 'Series 2nd', type: 'client', data: client },
    { name: 'Series 3rd', type: 'server', data: server },
    { name: 'Series 4th', type: 'net', data: net }
  ]
}

class App extends Component {
  componentDidMount() {
    const tip = new Tip({
      format: d => d3.format(',')(d.bin)
    })

    this.bar = new BarChart({
      target: this.refs.bar,
      axisPadding: 15,
      barPadding: 15,
      tickSize: 1,
      mouseover: tip.show,
      mouseout: tip.hide,
      ease: 'elastic',
      color: ['RGB(0, 177, 240)', 'rgb(243, 43, 101)']
    })

    const total = 3000

    this.circle = new CircleChart({
      target: this.refs.circle,
      thickness: 1,
      format: d => `${total * d | 0}ms`,
      ease: 'elastic',
      duration: 600
    })

    this.dot = new DotChart({
      target: this.refs.dot,
      mouseover: tip.show,
      mouseout: tip.hide
    })

    this.heatmap = new HeatmapChart({
      target: this.refs.heatmap,
      width: 250,
      height: 250,
      xTicks: 2,
      yTicks: 3,
      // color: ['rgb(16, 162, 224)', 'rgb(0, 216, 189)'],
      // opacityRange: [0.25, 1],
      // type: 'circle',
      gap: 2,
      mouseover: tip.show,
      mouseout: tip.hide
    })

    this.line = new LineChart({
      target: this.refs.line,
      width: 350,
      height: 100,
      xTicks: 3,
      yTicks: 3,
      mouseover: tip.show,
      mouseout: tip.hide
    })

    this.series = new SeriesChart({
      target: this.refs.series,
      ease: 'ease-out',
      xDomain: [new Date(new Date - 25 * 3600000)],
      height: 250,
      mouseover: tip.show,
      mouseout: tip.hide
    })

    this.bar.render(genBarData(24))
    this.circle.render(genCircleData())
    this.dot.render(genDotData(24))
    this.heatmap.render(genHeatmapData(15, 15))
    this.line.render(genLineData(12))
    this.series.render(genSeriesData(80))
  }

  componentDidUpdate() {
    this.changeData()
  }

  changeData = _ => {
    const to = Math.max(1, Math.random() * 5 | 0)
    const nbar = Math.max(15, Math.random() * 30 | 0)
    const nseries = Math.random() * 150 | 0
    const nheat = Math.max(15, Math.random() * 30 | 0)

    this.bar.update(genBarData(nbar))
    this.circle.update(genCircleData())
    this.dot.update(genDotData(nbar))
    this.heatmap.update(genHeatmapData(nheat, nheat))
    this.line.update(genLineData(24))
    this.series.update(genSeriesData(nseries).slice(0, to))
  }


  render() {
    return (
      <div className="container">
        <div id="actions">
          <button onClick={this.changeData}>Animate</button>
        </div>

        <section>
          <svg ref="series" className="series-chart"></svg>
        </section>

        <section>
          <svg ref="heatmap" className="heatmap-chart"></svg>
        </section>

        <section>
          <svg ref="dot" className="dot-chart"></svg>
        </section>

        <section>
          <svg ref="line" className="line-chart"></svg>
        </section>

        <section>
          <svg ref="bar" className="bar-chart"></svg>
        </section>

        <section>
          <svg ref="circle" className="circle-chart"></svg>
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))
