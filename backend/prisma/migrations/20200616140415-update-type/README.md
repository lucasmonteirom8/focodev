# Migration `20200616140415-update-type`

This migration has been generated at 6/16/2020, 2:04:15 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Type" DROP COLUMN "type",
ADD COLUMN "user_type" text  NOT NULL ;

ALTER TABLE "public"."User" ADD COLUMN "fk_type" integer  NOT NULL ;

ALTER TABLE "public"."User" ADD FOREIGN KEY ("fk_type")REFERENCES "public"."Type"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200616140100-create-database..20200616140415-update-type
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
@@ -17,15 +17,15 @@
   password    String
   birthday    DateTime?
   created_at  DateTime  @default(now())
   updated_at  DateTime? @default(now())
-  //fk_type     Int
-  //type        Type      @relation(fields: [fk_type], references: [id])
+  fk_type     Int
+  user_type   Type      @relation(fields: [fk_type], references: [id])
 }
 model Type {
   id          Int       @id @default(autoincrement())
-  type        String
+  user_type   String
 }
 model Post {
   id          Int       @id @default(autoincrement())
```


