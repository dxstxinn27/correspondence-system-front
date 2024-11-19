import { Routes } from '@angular/router';
import { ShowBranchComponent } from './components/branch/show-branch/show-branch.component';
import { CreateBranchComponent } from './components/branch/create-branch/create-branch.component';
import { UpdateBranchComponent } from './components/branch/update-branch/update-branch.component';
import { ShowRouteComponent } from './components/logistics/route/show-route/show-route.component';
import { CreateRouteComponent } from './components/logistics/route/create-route/create-route.component';
import { UpdateRouteComponent } from './components/logistics/route/update-route/update-route.component';
import { ShowServiceComponent } from './components/logistics/servicel/show-service/show-service.component';
import { CreateServiceComponent } from './components/logistics/servicel/create-service/create-service.component';
import { UpdateServiceComponent } from './components/logistics/servicel/update-service/update-service.component';
import { ShowTransportComponent } from './components/logistics/transport/show-transport/show-transport.component';
import { CreateTransportComponent } from './components/logistics/transport/create-transport/create-transport.component';
import { UpdateTransportComponent } from './components/logistics/transport/update-transport/update-transport.component';
import { ShowCustomerComponent } from './components/person/customer/show-customer/show-customer.component';
import { CreateCustomerComponent } from './components/person/customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './components/person/customer/update-customer/update-customer.component';
import { ShowEmployeeComponent } from './components/person/employee/show-employee/show-employee.component';
import { CreateEmployeeComponent } from './components/person/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/person/employee/update-employee/update-employee.component';
import { ShowCorrespondenceComponent } from './components/shipment/correspondence/show-correspondence/show-correspondence.component';
import { CreateCorrespondenceComponent } from './components/shipment/correspondence/create-correspondence/create-correspondence.component';
import { UpdateCorrespondenceComponent } from './components/shipment/correspondence/update-correspondence/update-correspondence.component';
import { ShowIncidentComponent } from './components/shipment/incident/show-incident/show-incident.component';
import { CreateIncidentComponent } from './components/shipment/incident/create-incident/create-incident.component';
import { UpdateIncidentComponent } from './components/shipment/incident/update-incident/update-incident.component';
import { ShowShippingComponent } from './components/shipment/shipping/show-shipping/show-shipping.component';
import { CreateShippingComponent } from './components/shipment/shipping/create-shipping/create-shipping.component';
import { UpdateShippingComponent } from './components/shipment/shipping/update-shipping/update-shipping.component';

export const routes: Routes = [
    // Branch routes
    { path: "branch/show", component: ShowBranchComponent },
    { path: "branch/new", component: CreateBranchComponent },
    { path: "branch/edit/:id", component: UpdateBranchComponent },

    // Logistics routes
    // Route
    { path: "logistics/route/show", component: ShowRouteComponent },
    { path: "logistics/route/new", component: CreateRouteComponent },
    { path: "logistics/route/edit/:id", component: UpdateRouteComponent },

    // Service
    { path: "logistics/servicel/show", component: ShowServiceComponent },
    { path: "logistics/servicel/new", component: CreateServiceComponent },
    { path: "logistics/servicel/edit/:id", component: UpdateServiceComponent },

    // Transport
    { path: "logistics/transport/show", component: ShowTransportComponent },
    { path: "logistics/transport/new", component: CreateTransportComponent },
    { path: "logistics/transport/edit/:id", component: UpdateTransportComponent },

    // PERSONS
    // Customer
    { path: "persons/customer/show", component: ShowCustomerComponent },
    { path: "persons/customer/new", component: CreateCustomerComponent },
    { path: "persons/customer/edit/:id", component: UpdateCustomerComponent },

    // Employee
    { path: "persons/employee/show", component: ShowEmployeeComponent },
    { path: "persons/employee/new", component: CreateEmployeeComponent },
    { path: "persons/employee/edit/:id", component: UpdateEmployeeComponent },

    // SHIPMENT
    // Correspondence
    { path: "shipments/correspondence/show", component: ShowCorrespondenceComponent},
    { path: "shipments/correspondence/new", component: CreateCorrespondenceComponent},
    { path: "shipments/correspondence/edit/:id", component: UpdateCorrespondenceComponent},

    // Incident
    { path: "shipments/incident/show", component: ShowIncidentComponent},
    { path: "shipments/incident/new", component: CreateIncidentComponent},
    { path: "shipments/incident/edit/:id", component: UpdateIncidentComponent},

    // Shipping
    { path: "shipments/shipping/show", component: ShowShippingComponent},
    { path: "shipments/shipping/new", component: CreateShippingComponent},
    { path: "shipments/shipping/edit/:id", component: UpdateShippingComponent},
];
