import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type ArticleTypeKeySpecifier = ('author' | 'createdAt' | 'description' | 'id' | 'tags' | 'title' | 'urls' | ArticleTypeKeySpecifier)[];
export type ArticleTypeFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	urls?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthorTypeKeySpecifier = ('id' | 'name' | AuthorTypeKeySpecifier)[];
export type AuthorTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createArticle' | 'createAuthor' | 'deleteArticle' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createArticle?: FieldPolicy<any> | FieldReadFunction<any>,
	createAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteArticle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('allArticles' | 'allAuthors' | 'article' | 'author' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	allArticles?: FieldPolicy<any> | FieldReadFunction<any>,
	allAuthors?: FieldPolicy<any> | FieldReadFunction<any>,
	article?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	ArticleType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleTypeKeySpecifier | (() => undefined | ArticleTypeKeySpecifier),
		fields?: ArticleTypeFieldPolicy,
	},
	AuthorType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthorTypeKeySpecifier | (() => undefined | AuthorTypeKeySpecifier),
		fields?: AuthorTypeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;