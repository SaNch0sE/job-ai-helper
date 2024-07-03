CREATE EXTENSION vector;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Account" (
	"id" text NOT NULL,
	"type" text NOT NULL,
	"provoder" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	"dateCreated" timestamp DEFAULT now() NOT NULL,
	"dateModified" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "Account_provoder_providerAccountId_pk" PRIMARY KEY("provoder","providerAccountId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "History" (
	"id" integer PRIMARY KEY NOT NULL,
	"prompt" text NOT NULL,
	"response" text NOT NULL,
	"dateCreated" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"type1" text NOT NULL,
	"features" text,
	"techstack" text,
	"links" text,
	"embedding" vector(1536),
	"dateCreated" timestamp DEFAULT now() NOT NULL,
	"dateModified" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "User" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"emailVerified" timestamp,
	"image" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "User_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Account" ADD CONSTRAINT "Account_id_User_id_fk" FOREIGN KEY ("id") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "Projects_embedding_index" ON "Projects" USING hnsw ("embedding" vector_cosine_ops);