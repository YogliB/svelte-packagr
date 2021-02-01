export interface Arguments {
	config?: string;
	help?: any;
	input: string;
	output?: string;
	preprocess?: 'all' | 'svelte' | 'js' | 'none';
}
