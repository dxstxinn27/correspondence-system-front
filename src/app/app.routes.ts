import { Routes } from '@angular/router';
import { ShowBranchComponent } from './components/branch/show-branch/show-branch.component';
import { CreateBranchComponent } from './components/branch/create-branch/create-branch.component';
import { UpdateBranchComponent } from './components/branch/update-branch/update-branch.component';

export const routes: Routes = [
    // Branch routes
    { path: "branch/show", component: ShowBranchComponent },
    { path: "branch/new", component: CreateBranchComponent },
    { path: "branches/edit/:id", component: UpdateBranchComponent }
];
