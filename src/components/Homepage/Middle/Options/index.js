import React, { Component } from 'react'
import { TweenLite } from 'gsap'
import { AdvancedWrapper, Input } from './styles'

class Options extends Component {
  state = {
    advancedOpened: false
  }

  handleClick = () => {
    const { advancedOpened } = this.state

    if (!advancedOpened) {
      TweenLite.to('#advanced-wrapper', 0.2, {
        height: '275px'
      })
      TweenLite.to('#arrow-down-icon', 0.35, { rotation: 180 })
    } else {
      TweenLite.to('#advanced-wrapper', 0.2, {
        height: '0'
      })
      TweenLite.to('#arrow-down-icon', 0.35, { rotation: 0 })
    }
    this.setState(state => ({
      advancedOpened: !state.advancedOpened
    }))
  }

  render() {
    const { multipleCityCheckbox } = this.state

    return (
      <div>
        <AdvancedWrapper id="advanced-wrapper">
          <div
            style={{
              margin: 20
            }}
          >
            <div
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'baseline'
              }}
            >
              Budget
              <span style={{ fontSize: 13, fontWeight: 'normal', paddingLeft: 3 }}>(optional)</span>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
              <Input placeholder="$ From" noLeftMargin />
              <Input placeholder="$ To" />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 15,
                fontWeight: 'bold',
                marginTop: 15
              }}
            >
              <div style={{ marginBottom: 5 }}>
                Interests
                <span style={{ fontSize: 13, fontWeight: 'normal', paddingLeft: 3 }}>
                  (optional)
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 14,
                  fontWeight: 'normal'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <input
                    className="styled-checkbox2"
                    id="styled-checkbox-4"
                    type="checkbox"
                    value="value1"
                    defaultChecked={multipleCityCheckbox}
                    onChange={this.handleChangeCheck}
                  />
                  <label htmlFor="styled-checkbox-4" style={{ marginRight: 35 }}>
                    <span
                      style={{
                        marginRight: 5,

                        position: 'relative'
                      }}
                    >
                      Culture
                    </span>
                  </label>
                  <input
                    className="styled-checkbox2"
                    id="styled-checkbox-5"
                    type="checkbox"
                    value="value1"
                    defaultChecked={multipleCityCheckbox}
                    onChange={this.handleChangeCheck}
                  />
                  <label htmlFor="styled-checkbox-5" style={{ marginRight: 35 }}>
                    <span
                      style={{
                        marginRight: 5,

                        position: 'relative'
                      }}
                    >
                      Outdoors
                    </span>
                  </label>
                  <input
                    className="styled-checkbox2"
                    id="styled-checkbox-6"
                    type="checkbox"
                    value="value1"
                    defaultChecked={multipleCityCheckbox}
                    onChange={this.handleChangeCheck}
                  />
                  <label htmlFor="styled-checkbox-6" style={{ marginRight: 35 }}>
                    <span
                      style={{
                        marginRight: 5,

                        position: 'relative'
                      }}
                    >
                      Relaxing
                    </span>
                  </label>
                  <input
                    className="styled-checkbox2"
                    id="styled-checkbox-7"
                    type="checkbox"
                    value="value1"
                    defaultChecked={multipleCityCheckbox}
                    onChange={this.handleChangeCheck}
                  />
                  <label htmlFor="styled-checkbox-7" style={{ marginRight: 35 }}>
                    <span
                      style={{
                        marginRight: 5,

                        position: 'relative'
                      }}
                    >
                      Relaxing
                    </span>
                  </label>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <input
                    className="styled-checkbox2"
                    id="styled-checkbox-8"
                    type="checkbox"
                    value="value1"
                    defaultChecked={multipleCityCheckbox}
                    onChange={this.handleChangeCheck}
                  />
                  <label htmlFor="styled-checkbox-8" style={{ marginRight: 35 }}>
                    <span
                      style={{
                        marginRight: 5,

                        position: 'relative'
                      }}
                    >
                      Historic
                    </span>
                  </label>
                  <input
                    className="styled-checkbox2"
                    id="styled-checkbox-9"
                    type="checkbox"
                    value="value1"
                    defaultChecked={multipleCityCheckbox}
                    onChange={this.handleChangeCheck}
                  />
                  <label htmlFor="styled-checkbox-9" style={{ marginRight: 35 }}>
                    <span
                      style={{
                        marginRight: 5,

                        position: 'relative'
                      }}
                    >
                      Museums
                    </span>
                  </label>
                  <input
                    className="styled-checkbox2"
                    id="styled-checkbox-10"
                    type="checkbox"
                    value="value1"
                    defaultChecked={multipleCityCheckbox}
                    onChange={this.handleChangeCheck}
                  />
                  <label htmlFor="styled-checkbox-10" style={{ marginRight: 35 }}>
                    <span
                      style={{
                        marginRight: 5,

                        position: 'relative'
                      }}
                    >
                      Shopping
                    </span>
                  </label>
                  <input
                    className="styled-checkbox2"
                    id="styled-checkbox-11"
                    type="checkbox"
                    value="value1"
                    defaultChecked={multipleCityCheckbox}
                    onChange={this.handleChangeCheck}
                  />
                  <label htmlFor="styled-checkbox-11" style={{ marginRight: 35 }}>
                    <span
                      style={{
                        marginRight: 5,

                        position: 'relative'
                      }}
                    >
                      Culture
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </AdvancedWrapper>
      </div>
    )
  }
}

export default Options
