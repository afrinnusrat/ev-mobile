import CreatedUpdatedProps from './CreatedUpdatedProps';

export default interface Tenant extends CreatedUpdatedProps {
  id: string;
  name: string;
  email: string;
  subdomain: string;
  components: {
    ocpi?: {
      active: boolean;
      type: string;
    };
    organization?: {
      active: boolean;
    };
    pricing?: {
      active: boolean;
      type: string;
    };
    refund?: {
      active: boolean;
      type: string;
    };
    statistics?: {
      active: boolean;
      type: string;
    };
    analytics?: {
      active: boolean;
      type: string;
    };
  };
}

export interface TenantConnection {
  subdomain: string;
  name: string;
  endpoint: string;
}

export interface EndpointCloud {
  id: string;
  name: string;
  endpoint: string;
}
