import { Module } from "vuex";

export interface StateModuleInterface {
  id: string;
  module: Module<any, any>;
}
