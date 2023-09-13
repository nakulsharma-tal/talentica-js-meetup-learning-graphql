import { DateTimeResolver } from "graphql-scalars";
import DirectivePlugin from "@pothos/plugin-directives";
import FederationPlugin from "@pothos/plugin-federation";
import SchemaBuilder from "@pothos/core";
import ScopeAuthPlugin from "@pothos/plugin-scope-auth";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";

export const builder = new SchemaBuilder<{
  Scalars: {
    DateTime: {
      Input: Date;
      Output: Date;
    };
    ID: {
      Input: string;
      Output: string;
    };
  };
}>({
  notStrict: "Pothos may not work correctly when strict mode is not enabled in tsconfig.json",
  authScopes: () => ({
    permission: true,
  }),
  plugins: [ScopeAuthPlugin, SimpleObjectsPlugin, DirectivePlugin, FederationPlugin],
});

builder.addScalarType("DateTime", DateTimeResolver, {});
