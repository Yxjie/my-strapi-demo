import type { Schema, Struct } from '@strapi/strapi';

export interface RestaurantInfoOpenningHours extends Struct.ComponentSchema {
  collectionName: 'components_restaurant_info_openning_hours';
  info: {
    description: '';
    displayName: 'Openning hours';
    icon: 'plane';
  };
  attributes: {
    days: Schema.Attribute.String;
    hours: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'restaurant-info.openning-hours': RestaurantInfoOpenningHours;
    }
  }
}
