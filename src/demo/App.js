/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import {
    ExtraDashUiComponents,
    OrganizationChartComponent,
    ListBoxComponent,
    RatingComponent,
    CarouselComponent,
} from '../lib';
import orgSample from './sampleData/orgChartData';
import {cities, cars} from './sampleData/listComponentData';
import {carsCarousel} from './sampleData/carouselData';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            data: orgSample.data,
            data1: orgSample.data1,
            selection: null,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        console.log(newProps);
        this.setState(newProps);
    }

    render() {
        const responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3,
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2,
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
        return (
            <div>
                <CarouselComponent
                    value={carsCarousel}
                    numVisible={4}
                    numScroll={1}
                    // className="custom-carousel"
                    responsiveOptions={responsiveOptions}
                    header={'customHeader'}
                    page={this.state.page}
                    setProps={this.setProps}
                    // circular={true}
                    // autoplayInterval={2000}
                />
                {/* <RatingComponent
                    value={this.state.value}
                    setProps={this.setProps}
                    cancel={true}
                    stars={3}
                /> */}
                {/* <ListBoxComponent
                    id={'idk'}
                    value={this.state.value}
                    filter={true}
                    options={cars}
                    setProps={this.setProps}
                    style={{width: '15em'}}
                    listStyle={{maxHeight: '100px'}}
                    listContainerStyle={{maxHeight: '300px'}}
                    multiple={true}
                    disabled={false}
                    tooltip={'Hey'}
                /> */}
                {/* <OrganizationChartComponent
                    setProps={this.setProps}
                    value={this.state.data1}
                    selectionMode='multiple'
                    selection={this.state.selection}
                /> */}
                {/* <ExtraDashUiComponents
                    setProps={this.setProps}
                    value={this.state.value}
                /> */}
            </div>
        );
    }
}

export default App;
