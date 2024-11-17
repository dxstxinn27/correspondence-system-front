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
];
