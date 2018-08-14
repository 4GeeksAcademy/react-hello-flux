import Flux from "@4geeksacademy/react-flux-dash";

export const exampleAction = () => {
    
    // any data modification
    
    /**
     * To update any information on the store, 
     * you have to call the Flux.dispatchEvent function
     * 
     * Flux.dispatchEvent('my_sample_event', data);
     */
};


class Store extends Flux.DashStore{
    controller(){
        super();
        /**
         * Here is were you declare all your store "data events"
         * for example, lets declare a variable "my_sample_event"
         * 
         * this.addEvent('my_sample_event');
         */
    }
}
export const store = new Store();