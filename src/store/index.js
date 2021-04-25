import Vue from 'vue'
import Vuex from 'vuex'
import categories_modul from './modules/categories_modul';
import headers_modul from './modules/headers_modul';
import coffees_modul from './modules/coffees_modul';
import why_us_modul from './modules/why_us_modul';
import how_it_works_modul from './modules/how_it_works_modul';
import questions_modul from './modules/questions_modul';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		categories_modul,
		headers_modul,
		coffees_modul,
		why_us_modul,
		how_it_works_modul,
		questions_modul,
	}
})
