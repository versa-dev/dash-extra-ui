/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';
import {
    BreadcrumbsDashUiComponents,
    CarouselComponent,
    DataScrollerDashUiComponents,
    OrganizationChartComponent,
    PaginatorDashUiComponents,
    TreeDashUiComponents,
    WebcamDashUiComponents,
    MicrophoneDashUiComponents,
    TrelloComponent
} from '../lib';
import {carsCarousel} from './sampleData/carouselData';
import orgSample from './sampleData/orgChartData';

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            data: orgSample.data,
            data1: orgSample.data1,
            selection: null,
            nodes: null,
            expandedKeys: {},
            first: 0,
            rows: 10,
            first2: 0,
            rows2: 10,
            carData: [],
            screenshot: ""
        };
        this.recaptchaCallback = this.recaptchaCallback.bind(this);
        this.toggleMovies = this.toggleMovies.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
        this.onPageChange2 = this.onPageChange2.bind(this);

        this.carTemplate = this.carTemplate.bind(this);
    }

    componentDidMount() {
        this.loadJSON('../../car-large.json');
    }

    loadJSON(path) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    this.setState({
                        carData: JSON.parse(xhr.responseText),
                    });
                } else {
                    console.log('Error');
                }
            }
        };
        xhr.open('GET', path, true);
        xhr.send();
    }

    setProps(newProps) {
        // console.log(newProps);
        // this.setState({
        //     screenshot: newProps.screenshot
        // });
    }

    recaptchaCallback(response) {
        console.log('Response');
    }

    recaptchaExpiredCallback() {
        console.log('Expired');
    }

    onPageChange(event) {
        this.setState({
            first: event.first,
            rows: event.rows,
        });
    }

    onPageChange2(event) {
        this.setState({
            first2: event.first,
            rows2: event.rows,
        });
    }

    toggleMovies() {
        let expandedKeys = {...this.state.expandedKeys};
        if (expandedKeys['2']) delete expandedKeys['2'];
        else expandedKeys['2'] = true;

        this.setState({expandedKeys: expandedKeys});
    }

    carTemplate(car) {
        // console.log(car)
        if (!car) {
            return;
        }

        // data

        const src = './' + car.brand + '.png';

        return (
            <div className="p-grid car-item">
                <div className="p-col-12 p-md-3">
                    <img src={src} alt="Car" />
                </div>
                <div className="p-col-12 p-md-9">
                    <div className="p-grid">
                        <div className="p-col-2 p-sm-6">Vin: </div>
                        <div className="p-col-10 p-sm-6">{car.vin}</div>

                        <div className="p-col-2 p-sm-6">Year: </div>
                        <div className="p-col-10 p-sm-6">{car.year}</div>

                        <div className="p-col-2 p-sm-6">Brand: </div>
                        <div className="p-col-10 p-sm-6">{car.brand}</div>

                        <div className="p-col-2 p-sm-6">Color: </div>
                        <div className="p-col-10 p-sm-6">{car.color}</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        // console.log(this.state.carData.data);

        const items = [
            {label: 'Categories'},
            {label: 'Sports'},
            {label: 'Football'},
            {label: 'Countries'},
            {label: 'Spain'},
            {label: 'F.C. Barcelona'},
            {label: 'Squad'},
            {
                label: 'Lionel Messi',
                url: 'https://en.wikipedia.org/wiki/Lionel_Messi',
            },
        ];

        const home = {
            icon: 'tumb tumb-home',
            url: 'https://github.com/nfrik/extra_dash_ui_components.git',
            label: 'Home',
        };

        const footer = (
            <button ref={el => (this.loadButton = el)}> Load </button>
        );

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
        const data = [
            {
                key: '0',
                label: 'Documents',
                data: 'Documents Folder',
                icon: 'pi pi-fw pi-inbox',
                children: [
                    {
                        key: '0-0',
                        label: 'Work',
                        data: 'Work Folder',
                        icon: 'pi pi-fw pi-cog',
                        children: [
                            {
                                key: '0-0-0',
                                label: 'Expenses.doc',
                                icon: 'pi pi-fw pi-file',
                                data: 'Expenses Document',
                            },
                            {
                                key: '0-0-1',
                                label: 'Resume.doc',
                                icon: 'pi pi-fw pi-file',
                                data: 'Resume Document',
                            },
                        ],
                    },
                    {
                        key: '0-1',
                        label: 'Home',
                        data: 'Home Folder',
                        icon: 'pi pi-fw pi-home',
                        children: [
                            {
                                key: '0-1-0',
                                label: 'Invoices.txt',
                                icon: 'pi pi-fw pi-file',
                                data: 'Invoices for this month',
                            },
                        ],
                    },
                ],
            },
            {
                key: '1',
                label: 'Events',
                data: 'Events Folder',
                icon: 'pi pi-fw pi-calendar',
                children: [
                    {
                        key: '1-0',
                        label: 'Meeting',
                        icon: 'pi pi-fw pi-calendar-plus',
                        data: 'Meeting',
                    },
                    {
                        key: '1-1',
                        label: 'Product Launch',
                        icon: 'pi pi-fw pi-calendar-plus',
                        data: 'Product Launch',
                    },
                    {
                        key: '1-2',
                        label: 'Report Review',
                        icon: 'pi pi-fw pi-calendar-plus',
                        data: 'Report Review',
                    },
                ],
            },
            {
                key: '2',
                label: '<div>adsaf</div>Movies',
                data: 'Movies Folder',
                icon: 'pi pi-fw pi-star',
                children: [
                    {
                        key: '2-0',
                        icon: 'pi pi-fw pi-star',
                        label: 'Al Pacino',
                        data: 'Pacino Movies',
                        children: [
                            {
                                key: '2-0-0',
                                label: 'Scarface',
                                icon: 'pi pi-fw pi-video',
                                data: 'Scarface Movie',
                            },
                            {
                                key: '2-0-1',
                                label: 'Serpico',
                                icon: 'pi pi-fw pi-video',
                                data: 'Serpico Movie',
                            },
                        ],
                    },
                    {
                        key: '2-1',
                        label: 'Robert De Niro',
                        icon: 'pi pi-fw pi-star',
                        data: 'De Niro Movies',
                        children: [
                            {
                                key: '2-1-0',
                                label: 'Goodfellas',
                                icon: 'pi pi-fw pi-video',
                                data: 'Goodfellas Movie',
                            },
                            {
                                key: '2-1-1',
                                label: 'Untouchables',
                                icon: 'pi pi-fw pi-video',
                                data: 'Untouchables Movie',
                            },
                        ],
                    },
                ],
            },
        ];

        return (
            <div>
                {/* <CarouselComponent
                    value={carsCarousel}
                    numVisible={4}
                    numScroll={1}
                    // className="custom-carousel"
                    responsiveOptions={responsiveOptions}
                    header={'customHeader'}
                    // page={this.state.page}
                    // setProps={this.setProps}
                    circular={true}
                    autoplayInterval={2000}
                /> */}
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
                    selectionMode="multiple"
                    selection={this.state.selection}
                /> */}
                {/* <ExtraDashUiComponents
                    setProps={this.setProps}
                    value={this.state.value}
                /> */}
                {/* <BreadcrumbsDashUiComponents model={items} home={home} />
                <h1>Hello, Dash!</h1> */}
                {/* <h3 className="first">Uncontrolled</h3>
                <TreeDashUiComponents value={data} {...this.state} />
                <h3>Controlled</h3>
                <button onClick={this.toggleMovies}>Toggle Movies</button>
                <TreeDashUiComponents
                    value={data}
                    expandedKeys={this.state.expandedKeys}
                    onToggle={e => this.setState({expandedKeys: e.value})}
                    style={{marginTop: '.5em'}}
                />
                <h3>Default</h3>
                <PaginatorDashUiComponents
                    first={this.state.first}
                    rows={this.state.rows}
                    totalRecords={120}
                    rowsPerPageOptions={[10, 20, 30]}
                    onPageChange={this.onPageChange}
                ></PaginatorDashUiComponents> */}
                {/* <PaginatorDashUiComponents/> */}
                {/* <h3>Custom Template</h3>
                <PaginatorDashUiComponents
                    first={this.state.first2}
                    rows={this.state.rows2}
                    totalRecords={120}
                    rowsPerPageOptions={[10, 20, 30]}
                    onPageChange={this.onPageChange2}
                    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                ></PaginatorDashUiComponents> */}
                {/* <div className="content-section implementation">
                    Demo is at the bottom of this page.
                </div> */}

                {/* <div className="content-section implementation">
                    <DataScrollerDashUiComponents
                        value={this.state.carData.data}
                        itemTemplate={this.carTemplate}
                        rows={10}
                        inline={true}
                        scrollHeight="500px"
                        header="Scroll Down to Load More"
                    />
                    <DataScrollerDashUiComponents
                        value={this.state.carData.data}
                        itemTemplate={this.carTemplate}
                        rows={5}
                        loader={this.loadButton}
                        footer={footer}
                        header="Click Load Button at Footer to Load More"
                    /> */}
                {/* </div> */}
                {/* <WebcamDashUiComponents
                    id='webcam'
                    audio={false}
                    screenshotFormat="image/jpeg"
                    screenshotWidth={500}
                    width={500}
                    height={300}
                    setProps={this.setProps}
                /> */}
                {/* <MicrophoneDashUiComponents/> */}
                <TrelloComponent draggable = {true}/>
            </div>
        );
    }
}

export default App;
