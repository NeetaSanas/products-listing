import { Injectable } from '@angular/core';

@Injectable()
export class HomepageService {
    constructor() { }
    getProducts(){
        return [
            { name: 'Product 1', price: '100$', desc: 'Product Description to be enter here.', src: 'https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' },
            { name: 'Product 2', price: '200$', desc: 'Product Description to be enter here.', src: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=650' },
            { name: 'Product 3', price: '300$', desc: 'Product Description to be enter here.', src: 'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=650' },
            { name: 'Product 4', price: '400$', desc: 'Product Description to be enter here.', src: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60' },
            { name: 'Product 5', price: '500$', desc: 'Product Description to be enter here.', src: 'https://images.unsplash.com/photo-1540492649367-c8565a571e4b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZsb3dlciUyMHBvdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' },
            { name: 'Product 6', price: '600$', desc: 'Product Description to be enter here.', src: 'https://images.unsplash.com/photo-1617326033821-449e82ca23d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' }
        ]
    }
}
