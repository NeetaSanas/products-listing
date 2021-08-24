import { Injectable } from '@angular/core';
import { of } from 'rxjs';
 
@Injectable({
    providedIn: 'root'
})
export class ProductsStateService {
    public listKpis = jest.fn(() => of([]));
    public fetchUserActivityOverview = jest.fn(() => of([]));
    public fetchTeamStats = jest.fn(() => of([]));
    public fetchDepartmentStats = jest.fn(() => of([]));
    public fetchTrends = jest.fn(() => of([]));
    public fetchUtilization = jest.fn(() => of({}));
    public fetchEmployees = jest.fn(() => of([]));
    public fetchActivityOverviewList = jest.fn(() => of({}));
    public fetchDayViewData = jest.fn(() => of({}));
    public formatDate = jest.fn(d => d);
    public fetchDepartments = jest.fn(() => of({}));
    public fetchManagerKPIS = jest.fn(() => of([]));
    public fetchManagerActivityOverview = jest.fn(() => of([]));
    public fetchManagerUtilization = jest.fn(() => of({}));
    public fetchManagerTrends = jest.fn(() => of([]));
    public fetchSelectedEmployees = jest.fn(() => of([]));
    public fetchSearchResponse = jest.fn(() => of([]));
    public postDashboardPinData = jest.fn(() => of([]));
    public onSaveUnaccountedTime = jest.fn(() => of([]));
    public onSelectActivity = jest.fn(() => of([]));
    public getKPI = jest.fn(() => of({}));
    public fetchAllDepartments = jest.fn(() => of([]));
    public fetchSelectedDepartment = jest.fn(() => of([]));
    public fetchSelectedDepartmentList = jest.fn(() => of([]));
    public fetchUtilizationWorkTime = jest.fn(() => of([]));
}