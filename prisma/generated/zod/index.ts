import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const ArtistScalarFieldEnumSchema = z.enum(['id','name']);

export const Artist_genreScalarFieldEnumSchema = z.enum(['artist_id','genre_id']);

export const Artist_songScalarFieldEnumSchema = z.enum(['artist_id','song_id']);

export const GenreScalarFieldEnumSchema = z.enum(['id','genre']);

export const HistoryScalarFieldEnumSchema = z.enum(['user_id','song_id','played_at']);

export const IntegrationScalarFieldEnumSchema = z.enum(['id','provider','user_id','refresh_token','status','created_at','last_used']);

export const SongScalarFieldEnumSchema = z.enum(['id','name','duration']);

export const Song_genreScalarFieldEnumSchema = z.enum(['song_id','genre_id']);

export const External_idsScalarFieldEnumSchema = z.enum(['table_name','id','type','external_id']);

export const Song_genre_genreScalarFieldEnumSchema = z.enum(['song_genre_genre_id','genre_id']);

export const UserScalarFieldEnumSchema = z.enum(['id','username','firstName','lastName','role','email','pwdHash','created_at']);

export const TokenScalarFieldEnumSchema = z.enum(['id','token','created_at','expiry','status','device_id','username']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ARTIST SCHEMA
/////////////////////////////////////////

export const artistSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
})

export type artist = z.infer<typeof artistSchema>

/////////////////////////////////////////
// ARTIST GENRE SCHEMA
/////////////////////////////////////////

export const artist_genreSchema = z.object({
  artist_id: z.string(),
  genre_id: z.number().int(),
})

export type artist_genre = z.infer<typeof artist_genreSchema>

/////////////////////////////////////////
// ARTIST SONG SCHEMA
/////////////////////////////////////////

export const artist_songSchema = z.object({
  artist_id: z.string(),
  song_id: z.string(),
})

export type artist_song = z.infer<typeof artist_songSchema>

/////////////////////////////////////////
// GENRE SCHEMA
/////////////////////////////////////////

export const genreSchema = z.object({
  id: z.number().int(),
  genre: z.string().nullable(),
})

export type genre = z.infer<typeof genreSchema>

/////////////////////////////////////////
// HISTORY SCHEMA
/////////////////////////////////////////

export const historySchema = z.object({
  user_id: z.number().int(),
  song_id: z.string(),
  played_at: z.coerce.date(),
})

export type history = z.infer<typeof historySchema>

/////////////////////////////////////////
// INTEGRATION SCHEMA
/////////////////////////////////////////

export const integrationSchema = z.object({
  id: z.string(),
  provider: z.string(),
  user_id: z.number().int().nullable(),
  refresh_token: z.string().nullable(),
  status: z.string().nullable(),
  created_at: z.coerce.date().nullable(),
  last_used: z.coerce.date().nullable(),
})

export type integration = z.infer<typeof integrationSchema>

/////////////////////////////////////////
// SONG SCHEMA
/////////////////////////////////////////

export const songSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  duration: z.number().nullable(),
})

export type song = z.infer<typeof songSchema>

/////////////////////////////////////////
// SONG GENRE SCHEMA
/////////////////////////////////////////

export const song_genreSchema = z.object({
  song_id: z.string(),
  genre_id: z.number().int(),
})

export type song_genre = z.infer<typeof song_genreSchema>

/////////////////////////////////////////
// EXTERNAL IDS SCHEMA
/////////////////////////////////////////

export const external_idsSchema = z.object({
  table_name: z.string(),
  id: z.number().int(),
  type: z.string().nullable(),
  external_id: z.string().nullable(),
})

export type external_ids = z.infer<typeof external_idsSchema>

/////////////////////////////////////////
// SONG GENRE GENRE SCHEMA
/////////////////////////////////////////

export const song_genre_genreSchema = z.object({
  song_genre_genre_id: z.number().int(),
  genre_id: z.number().int(),
})

export type song_genre_genre = z.infer<typeof song_genre_genreSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const userSchema = z.object({
  id: z.number().int(),
  username: z.string().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  role: z.string().nullable(),
  email: z.string().nullable(),
  pwdHash: z.string().nullable(),
  created_at: z.coerce.date().nullable(),
})

export type user = z.infer<typeof userSchema>

/////////////////////////////////////////
// TOKEN SCHEMA
/////////////////////////////////////////

export const tokenSchema = z.object({
  id: z.number().int(),
  token: z.string().nullable(),
  created_at: z.coerce.date().nullable(),
  expiry: z.coerce.date().nullable(),
  status: z.number().int().nullable(),
  device_id: z.string().nullable(),
  username: z.string().nullable(),
})

export type token = z.infer<typeof tokenSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ARTIST
//------------------------------------------------------

export const artistSelectSchema: z.ZodType<Prisma.artistSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
}).strict()

// ARTIST GENRE
//------------------------------------------------------

export const artist_genreSelectSchema: z.ZodType<Prisma.artist_genreSelect> = z.object({
  artist_id: z.boolean().optional(),
  genre_id: z.boolean().optional(),
}).strict()

// ARTIST SONG
//------------------------------------------------------

export const artist_songSelectSchema: z.ZodType<Prisma.artist_songSelect> = z.object({
  artist_id: z.boolean().optional(),
  song_id: z.boolean().optional(),
}).strict()

// GENRE
//------------------------------------------------------

export const genreSelectSchema: z.ZodType<Prisma.genreSelect> = z.object({
  id: z.boolean().optional(),
  genre: z.boolean().optional(),
}).strict()

// HISTORY
//------------------------------------------------------

export const historySelectSchema: z.ZodType<Prisma.historySelect> = z.object({
  user_id: z.boolean().optional(),
  song_id: z.boolean().optional(),
  played_at: z.boolean().optional(),
}).strict()

// INTEGRATION
//------------------------------------------------------

export const integrationSelectSchema: z.ZodType<Prisma.integrationSelect> = z.object({
  id: z.boolean().optional(),
  provider: z.boolean().optional(),
  user_id: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  status: z.boolean().optional(),
  created_at: z.boolean().optional(),
  last_used: z.boolean().optional(),
}).strict()

// SONG
//------------------------------------------------------

export const songSelectSchema: z.ZodType<Prisma.songSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  duration: z.boolean().optional(),
}).strict()

// SONG GENRE
//------------------------------------------------------

export const song_genreSelectSchema: z.ZodType<Prisma.song_genreSelect> = z.object({
  song_id: z.boolean().optional(),
  genre_id: z.boolean().optional(),
}).strict()

// EXTERNAL IDS
//------------------------------------------------------

export const external_idsSelectSchema: z.ZodType<Prisma.external_idsSelect> = z.object({
  table_name: z.boolean().optional(),
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  external_id: z.boolean().optional(),
}).strict()

// SONG GENRE GENRE
//------------------------------------------------------

export const song_genre_genreSelectSchema: z.ZodType<Prisma.song_genre_genreSelect> = z.object({
  song_genre_genre_id: z.boolean().optional(),
  genre_id: z.boolean().optional(),
}).strict()

// USER
//------------------------------------------------------

export const userSelectSchema: z.ZodType<Prisma.userSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  role: z.boolean().optional(),
  email: z.boolean().optional(),
  pwdHash: z.boolean().optional(),
  created_at: z.boolean().optional(),
}).strict()

// TOKEN
//------------------------------------------------------

export const tokenSelectSchema: z.ZodType<Prisma.tokenSelect> = z.object({
  id: z.boolean().optional(),
  token: z.boolean().optional(),
  created_at: z.boolean().optional(),
  expiry: z.boolean().optional(),
  status: z.boolean().optional(),
  device_id: z.boolean().optional(),
  username: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const artistWhereInputSchema: z.ZodType<Prisma.artistWhereInput> = z.object({
  AND: z.union([ z.lazy(() => artistWhereInputSchema),z.lazy(() => artistWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => artistWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => artistWhereInputSchema),z.lazy(() => artistWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const artistOrderByWithRelationInputSchema: z.ZodType<Prisma.artistOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const artistWhereUniqueInputSchema: z.ZodType<Prisma.artistWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => artistWhereInputSchema),z.lazy(() => artistWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => artistWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => artistWhereInputSchema),z.lazy(() => artistWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const artistOrderByWithAggregationInputSchema: z.ZodType<Prisma.artistOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => artistCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => artistMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => artistMinOrderByAggregateInputSchema).optional()
}).strict();

export const artistScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.artistScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => artistScalarWhereWithAggregatesInputSchema),z.lazy(() => artistScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => artistScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => artistScalarWhereWithAggregatesInputSchema),z.lazy(() => artistScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const artist_genreWhereInputSchema: z.ZodType<Prisma.artist_genreWhereInput> = z.object({
  AND: z.union([ z.lazy(() => artist_genreWhereInputSchema),z.lazy(() => artist_genreWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => artist_genreWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => artist_genreWhereInputSchema),z.lazy(() => artist_genreWhereInputSchema).array() ]).optional(),
  artist_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const artist_genreOrderByWithRelationInputSchema: z.ZodType<Prisma.artist_genreOrderByWithRelationInput> = z.object({
  artist_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const artist_genreWhereUniqueInputSchema: z.ZodType<Prisma.artist_genreWhereUniqueInput> = z.object({
  artist_id_genre_id: z.lazy(() => artist_genreArtist_idGenre_idCompoundUniqueInputSchema)
})
.and(z.object({
  artist_id_genre_id: z.lazy(() => artist_genreArtist_idGenre_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => artist_genreWhereInputSchema),z.lazy(() => artist_genreWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => artist_genreWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => artist_genreWhereInputSchema),z.lazy(() => artist_genreWhereInputSchema).array() ]).optional(),
  artist_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const artist_genreOrderByWithAggregationInputSchema: z.ZodType<Prisma.artist_genreOrderByWithAggregationInput> = z.object({
  artist_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => artist_genreCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => artist_genreAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => artist_genreMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => artist_genreMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => artist_genreSumOrderByAggregateInputSchema).optional()
}).strict();

export const artist_genreScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.artist_genreScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => artist_genreScalarWhereWithAggregatesInputSchema),z.lazy(() => artist_genreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => artist_genreScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => artist_genreScalarWhereWithAggregatesInputSchema),z.lazy(() => artist_genreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  artist_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const artist_songWhereInputSchema: z.ZodType<Prisma.artist_songWhereInput> = z.object({
  AND: z.union([ z.lazy(() => artist_songWhereInputSchema),z.lazy(() => artist_songWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => artist_songWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => artist_songWhereInputSchema),z.lazy(() => artist_songWhereInputSchema).array() ]).optional(),
  artist_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  song_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const artist_songOrderByWithRelationInputSchema: z.ZodType<Prisma.artist_songOrderByWithRelationInput> = z.object({
  artist_id: z.lazy(() => SortOrderSchema).optional(),
  song_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const artist_songWhereUniqueInputSchema: z.ZodType<Prisma.artist_songWhereUniqueInput> = z.object({
  artist_id_song_id: z.lazy(() => artist_songArtist_idSong_idCompoundUniqueInputSchema)
})
.and(z.object({
  artist_id_song_id: z.lazy(() => artist_songArtist_idSong_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => artist_songWhereInputSchema),z.lazy(() => artist_songWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => artist_songWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => artist_songWhereInputSchema),z.lazy(() => artist_songWhereInputSchema).array() ]).optional(),
  artist_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  song_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const artist_songOrderByWithAggregationInputSchema: z.ZodType<Prisma.artist_songOrderByWithAggregationInput> = z.object({
  artist_id: z.lazy(() => SortOrderSchema).optional(),
  song_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => artist_songCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => artist_songMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => artist_songMinOrderByAggregateInputSchema).optional()
}).strict();

export const artist_songScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.artist_songScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => artist_songScalarWhereWithAggregatesInputSchema),z.lazy(() => artist_songScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => artist_songScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => artist_songScalarWhereWithAggregatesInputSchema),z.lazy(() => artist_songScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  artist_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  song_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const genreWhereInputSchema: z.ZodType<Prisma.genreWhereInput> = z.object({
  AND: z.union([ z.lazy(() => genreWhereInputSchema),z.lazy(() => genreWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => genreWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => genreWhereInputSchema),z.lazy(() => genreWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  genre: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const genreOrderByWithRelationInputSchema: z.ZodType<Prisma.genreOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  genre: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const genreWhereUniqueInputSchema: z.ZodType<Prisma.genreWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => genreWhereInputSchema),z.lazy(() => genreWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => genreWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => genreWhereInputSchema),z.lazy(() => genreWhereInputSchema).array() ]).optional(),
  genre: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const genreOrderByWithAggregationInputSchema: z.ZodType<Prisma.genreOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  genre: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => genreCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => genreAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => genreMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => genreMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => genreSumOrderByAggregateInputSchema).optional()
}).strict();

export const genreScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.genreScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => genreScalarWhereWithAggregatesInputSchema),z.lazy(() => genreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => genreScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => genreScalarWhereWithAggregatesInputSchema),z.lazy(() => genreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  genre: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const historyWhereInputSchema: z.ZodType<Prisma.historyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => historyWhereInputSchema),z.lazy(() => historyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => historyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => historyWhereInputSchema),z.lazy(() => historyWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  song_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  played_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const historyOrderByWithRelationInputSchema: z.ZodType<Prisma.historyOrderByWithRelationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  song_id: z.lazy(() => SortOrderSchema).optional(),
  played_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const historyWhereUniqueInputSchema: z.ZodType<Prisma.historyWhereUniqueInput> = z.object({
  user_id_song_id_played_at: z.lazy(() => historyUser_idSong_idPlayed_atCompoundUniqueInputSchema)
})
.and(z.object({
  user_id_song_id_played_at: z.lazy(() => historyUser_idSong_idPlayed_atCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => historyWhereInputSchema),z.lazy(() => historyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => historyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => historyWhereInputSchema),z.lazy(() => historyWhereInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  song_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  played_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const historyOrderByWithAggregationInputSchema: z.ZodType<Prisma.historyOrderByWithAggregationInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  song_id: z.lazy(() => SortOrderSchema).optional(),
  played_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => historyCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => historyAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => historyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => historyMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => historySumOrderByAggregateInputSchema).optional()
}).strict();

export const historyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.historyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => historyScalarWhereWithAggregatesInputSchema),z.lazy(() => historyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => historyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => historyScalarWhereWithAggregatesInputSchema),z.lazy(() => historyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  user_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  song_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  played_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const integrationWhereInputSchema: z.ZodType<Prisma.integrationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => integrationWhereInputSchema),z.lazy(() => integrationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => integrationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => integrationWhereInputSchema),z.lazy(() => integrationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  last_used: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const integrationOrderByWithRelationInputSchema: z.ZodType<Prisma.integrationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_used: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const integrationWhereUniqueInputSchema: z.ZodType<Prisma.integrationWhereUniqueInput> = z.object({
  id_provider: z.lazy(() => integrationIdProviderCompoundUniqueInputSchema)
})
.and(z.object({
  id_provider: z.lazy(() => integrationIdProviderCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => integrationWhereInputSchema),z.lazy(() => integrationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => integrationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => integrationWhereInputSchema),z.lazy(() => integrationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  last_used: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export const integrationOrderByWithAggregationInputSchema: z.ZodType<Prisma.integrationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last_used: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => integrationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => integrationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => integrationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => integrationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => integrationSumOrderByAggregateInputSchema).optional()
}).strict();

export const integrationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.integrationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => integrationScalarWhereWithAggregatesInputSchema),z.lazy(() => integrationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => integrationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => integrationScalarWhereWithAggregatesInputSchema),z.lazy(() => integrationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  user_id: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  refresh_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  last_used: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const songWhereInputSchema: z.ZodType<Prisma.songWhereInput> = z.object({
  AND: z.union([ z.lazy(() => songWhereInputSchema),z.lazy(() => songWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => songWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => songWhereInputSchema),z.lazy(() => songWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  duration: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const songOrderByWithRelationInputSchema: z.ZodType<Prisma.songOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  duration: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const songWhereUniqueInputSchema: z.ZodType<Prisma.songWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => songWhereInputSchema),z.lazy(() => songWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => songWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => songWhereInputSchema),z.lazy(() => songWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  duration: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict());

export const songOrderByWithAggregationInputSchema: z.ZodType<Prisma.songOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  duration: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => songCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => songAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => songMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => songMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => songSumOrderByAggregateInputSchema).optional()
}).strict();

export const songScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.songScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => songScalarWhereWithAggregatesInputSchema),z.lazy(() => songScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => songScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => songScalarWhereWithAggregatesInputSchema),z.lazy(() => songScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  duration: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const song_genreWhereInputSchema: z.ZodType<Prisma.song_genreWhereInput> = z.object({
  AND: z.union([ z.lazy(() => song_genreWhereInputSchema),z.lazy(() => song_genreWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => song_genreWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => song_genreWhereInputSchema),z.lazy(() => song_genreWhereInputSchema).array() ]).optional(),
  song_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const song_genreOrderByWithRelationInputSchema: z.ZodType<Prisma.song_genreOrderByWithRelationInput> = z.object({
  song_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const song_genreWhereUniqueInputSchema: z.ZodType<Prisma.song_genreWhereUniqueInput> = z.object({
  song_id_genre_id: z.lazy(() => song_genreSong_idGenre_idCompoundUniqueInputSchema)
})
.and(z.object({
  song_id_genre_id: z.lazy(() => song_genreSong_idGenre_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => song_genreWhereInputSchema),z.lazy(() => song_genreWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => song_genreWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => song_genreWhereInputSchema),z.lazy(() => song_genreWhereInputSchema).array() ]).optional(),
  song_id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const song_genreOrderByWithAggregationInputSchema: z.ZodType<Prisma.song_genreOrderByWithAggregationInput> = z.object({
  song_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => song_genreCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => song_genreAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => song_genreMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => song_genreMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => song_genreSumOrderByAggregateInputSchema).optional()
}).strict();

export const song_genreScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.song_genreScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => song_genreScalarWhereWithAggregatesInputSchema),z.lazy(() => song_genreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => song_genreScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => song_genreScalarWhereWithAggregatesInputSchema),z.lazy(() => song_genreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  song_id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const external_idsWhereInputSchema: z.ZodType<Prisma.external_idsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => external_idsWhereInputSchema),z.lazy(() => external_idsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => external_idsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => external_idsWhereInputSchema),z.lazy(() => external_idsWhereInputSchema).array() ]).optional(),
  table_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  external_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const external_idsOrderByWithRelationInputSchema: z.ZodType<Prisma.external_idsOrderByWithRelationInput> = z.object({
  table_name: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  external_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const external_idsWhereUniqueInputSchema: z.ZodType<Prisma.external_idsWhereUniqueInput> = z.object({
  table_name_id: z.lazy(() => external_idsTable_nameIdCompoundUniqueInputSchema)
})
.and(z.object({
  table_name_id: z.lazy(() => external_idsTable_nameIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => external_idsWhereInputSchema),z.lazy(() => external_idsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => external_idsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => external_idsWhereInputSchema),z.lazy(() => external_idsWhereInputSchema).array() ]).optional(),
  table_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  external_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const external_idsOrderByWithAggregationInputSchema: z.ZodType<Prisma.external_idsOrderByWithAggregationInput> = z.object({
  table_name: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  external_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => external_idsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => external_idsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => external_idsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => external_idsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => external_idsSumOrderByAggregateInputSchema).optional()
}).strict();

export const external_idsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.external_idsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => external_idsScalarWhereWithAggregatesInputSchema),z.lazy(() => external_idsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => external_idsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => external_idsScalarWhereWithAggregatesInputSchema),z.lazy(() => external_idsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  table_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  external_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const song_genre_genreWhereInputSchema: z.ZodType<Prisma.song_genre_genreWhereInput> = z.object({
  AND: z.union([ z.lazy(() => song_genre_genreWhereInputSchema),z.lazy(() => song_genre_genreWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => song_genre_genreWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => song_genre_genreWhereInputSchema),z.lazy(() => song_genre_genreWhereInputSchema).array() ]).optional(),
  song_genre_genre_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const song_genre_genreOrderByWithRelationInputSchema: z.ZodType<Prisma.song_genre_genreOrderByWithRelationInput> = z.object({
  song_genre_genre_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const song_genre_genreWhereUniqueInputSchema: z.ZodType<Prisma.song_genre_genreWhereUniqueInput> = z.object({
  song_genre_genre_id_genre_id: z.lazy(() => song_genre_genreSong_genre_genre_idGenre_idCompoundUniqueInputSchema)
})
.and(z.object({
  song_genre_genre_id_genre_id: z.lazy(() => song_genre_genreSong_genre_genre_idGenre_idCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => song_genre_genreWhereInputSchema),z.lazy(() => song_genre_genreWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => song_genre_genreWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => song_genre_genreWhereInputSchema),z.lazy(() => song_genre_genreWhereInputSchema).array() ]).optional(),
  song_genre_genre_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const song_genre_genreOrderByWithAggregationInputSchema: z.ZodType<Prisma.song_genre_genreOrderByWithAggregationInput> = z.object({
  song_genre_genre_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => song_genre_genreCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => song_genre_genreAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => song_genre_genreMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => song_genre_genreMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => song_genre_genreSumOrderByAggregateInputSchema).optional()
}).strict();

export const song_genre_genreScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.song_genre_genreScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => song_genre_genreScalarWhereWithAggregatesInputSchema),z.lazy(() => song_genre_genreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => song_genre_genreScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => song_genre_genreScalarWhereWithAggregatesInputSchema),z.lazy(() => song_genre_genreScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  song_genre_genre_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  genre_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const userWhereInputSchema: z.ZodType<Prisma.userWhereInput> = z.object({
  AND: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pwdHash: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const userOrderByWithRelationInputSchema: z.ZodType<Prisma.userOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  firstName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pwdHash: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const userWhereUniqueInputSchema: z.ZodType<Prisma.userWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => userWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => userWhereInputSchema),z.lazy(() => userWhereInputSchema).array() ]).optional(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lastName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  pwdHash: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict());

export const userOrderByWithAggregationInputSchema: z.ZodType<Prisma.userOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  firstName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lastName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pwdHash: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => userCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => userAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => userMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => userMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => userSumOrderByAggregateInputSchema).optional()
}).strict();

export const userScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.userScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => userScalarWhereWithAggregatesInputSchema),z.lazy(() => userScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => userScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => userScalarWhereWithAggregatesInputSchema),z.lazy(() => userScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  username: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  firstName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  lastName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  pwdHash: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export const tokenWhereInputSchema: z.ZodType<Prisma.tokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => tokenWhereInputSchema),z.lazy(() => tokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => tokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => tokenWhereInputSchema),z.lazy(() => tokenWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  expiry: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  device_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const tokenOrderByWithRelationInputSchema: z.ZodType<Prisma.tokenOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expiry: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  device_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export const tokenWhereUniqueInputSchema: z.ZodType<Prisma.tokenWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => tokenWhereInputSchema),z.lazy(() => tokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => tokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => tokenWhereInputSchema),z.lazy(() => tokenWhereInputSchema).array() ]).optional(),
  token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  expiry: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  device_id: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const tokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.tokenOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  created_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expiry: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  device_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  username: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => tokenCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => tokenAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => tokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => tokenMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => tokenSumOrderByAggregateInputSchema).optional()
}).strict();

export const tokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.tokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => tokenScalarWhereWithAggregatesInputSchema),z.lazy(() => tokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => tokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => tokenScalarWhereWithAggregatesInputSchema),z.lazy(() => tokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  created_at: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  expiry: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  device_id: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  username: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const artistCreateInputSchema: z.ZodType<Prisma.artistCreateInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable()
}).strict();

export const artistUncheckedCreateInputSchema: z.ZodType<Prisma.artistUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable()
}).strict();

export const artistUpdateInputSchema: z.ZodType<Prisma.artistUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const artistUncheckedUpdateInputSchema: z.ZodType<Prisma.artistUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const artistCreateManyInputSchema: z.ZodType<Prisma.artistCreateManyInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable()
}).strict();

export const artistUpdateManyMutationInputSchema: z.ZodType<Prisma.artistUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const artistUncheckedUpdateManyInputSchema: z.ZodType<Prisma.artistUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const artist_genreCreateInputSchema: z.ZodType<Prisma.artist_genreCreateInput> = z.object({
  artist_id: z.string(),
  genre_id: z.number().int()
}).strict();

export const artist_genreUncheckedCreateInputSchema: z.ZodType<Prisma.artist_genreUncheckedCreateInput> = z.object({
  artist_id: z.string(),
  genre_id: z.number().int()
}).strict();

export const artist_genreUpdateInputSchema: z.ZodType<Prisma.artist_genreUpdateInput> = z.object({
  artist_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const artist_genreUncheckedUpdateInputSchema: z.ZodType<Prisma.artist_genreUncheckedUpdateInput> = z.object({
  artist_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const artist_genreCreateManyInputSchema: z.ZodType<Prisma.artist_genreCreateManyInput> = z.object({
  artist_id: z.string(),
  genre_id: z.number().int()
}).strict();

export const artist_genreUpdateManyMutationInputSchema: z.ZodType<Prisma.artist_genreUpdateManyMutationInput> = z.object({
  artist_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const artist_genreUncheckedUpdateManyInputSchema: z.ZodType<Prisma.artist_genreUncheckedUpdateManyInput> = z.object({
  artist_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const artist_songCreateInputSchema: z.ZodType<Prisma.artist_songCreateInput> = z.object({
  artist_id: z.string(),
  song_id: z.string()
}).strict();

export const artist_songUncheckedCreateInputSchema: z.ZodType<Prisma.artist_songUncheckedCreateInput> = z.object({
  artist_id: z.string(),
  song_id: z.string()
}).strict();

export const artist_songUpdateInputSchema: z.ZodType<Prisma.artist_songUpdateInput> = z.object({
  artist_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const artist_songUncheckedUpdateInputSchema: z.ZodType<Prisma.artist_songUncheckedUpdateInput> = z.object({
  artist_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const artist_songCreateManyInputSchema: z.ZodType<Prisma.artist_songCreateManyInput> = z.object({
  artist_id: z.string(),
  song_id: z.string()
}).strict();

export const artist_songUpdateManyMutationInputSchema: z.ZodType<Prisma.artist_songUpdateManyMutationInput> = z.object({
  artist_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const artist_songUncheckedUpdateManyInputSchema: z.ZodType<Prisma.artist_songUncheckedUpdateManyInput> = z.object({
  artist_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const genreCreateInputSchema: z.ZodType<Prisma.genreCreateInput> = z.object({
  id: z.number().int(),
  genre: z.string().optional().nullable()
}).strict();

export const genreUncheckedCreateInputSchema: z.ZodType<Prisma.genreUncheckedCreateInput> = z.object({
  id: z.number().int(),
  genre: z.string().optional().nullable()
}).strict();

export const genreUpdateInputSchema: z.ZodType<Prisma.genreUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  genre: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const genreUncheckedUpdateInputSchema: z.ZodType<Prisma.genreUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  genre: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const genreCreateManyInputSchema: z.ZodType<Prisma.genreCreateManyInput> = z.object({
  id: z.number().int(),
  genre: z.string().optional().nullable()
}).strict();

export const genreUpdateManyMutationInputSchema: z.ZodType<Prisma.genreUpdateManyMutationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  genre: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const genreUncheckedUpdateManyInputSchema: z.ZodType<Prisma.genreUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  genre: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const historyCreateInputSchema: z.ZodType<Prisma.historyCreateInput> = z.object({
  user_id: z.number().int(),
  song_id: z.string(),
  played_at: z.coerce.date()
}).strict();

export const historyUncheckedCreateInputSchema: z.ZodType<Prisma.historyUncheckedCreateInput> = z.object({
  user_id: z.number().int(),
  song_id: z.string(),
  played_at: z.coerce.date()
}).strict();

export const historyUpdateInputSchema: z.ZodType<Prisma.historyUpdateInput> = z.object({
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  played_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const historyUncheckedUpdateInputSchema: z.ZodType<Prisma.historyUncheckedUpdateInput> = z.object({
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  played_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const historyCreateManyInputSchema: z.ZodType<Prisma.historyCreateManyInput> = z.object({
  user_id: z.number().int(),
  song_id: z.string(),
  played_at: z.coerce.date()
}).strict();

export const historyUpdateManyMutationInputSchema: z.ZodType<Prisma.historyUpdateManyMutationInput> = z.object({
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  played_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const historyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.historyUncheckedUpdateManyInput> = z.object({
  user_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  played_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const integrationCreateInputSchema: z.ZodType<Prisma.integrationCreateInput> = z.object({
  id: z.string(),
  provider: z.string(),
  user_id: z.number().int().optional().nullable(),
  refresh_token: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  last_used: z.coerce.date().optional().nullable()
}).strict();

export const integrationUncheckedCreateInputSchema: z.ZodType<Prisma.integrationUncheckedCreateInput> = z.object({
  id: z.string(),
  provider: z.string(),
  user_id: z.number().int().optional().nullable(),
  refresh_token: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  last_used: z.coerce.date().optional().nullable()
}).strict();

export const integrationUpdateInputSchema: z.ZodType<Prisma.integrationUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_used: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const integrationUncheckedUpdateInputSchema: z.ZodType<Prisma.integrationUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_used: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const integrationCreateManyInputSchema: z.ZodType<Prisma.integrationCreateManyInput> = z.object({
  id: z.string(),
  provider: z.string(),
  user_id: z.number().int().optional().nullable(),
  refresh_token: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  last_used: z.coerce.date().optional().nullable()
}).strict();

export const integrationUpdateManyMutationInputSchema: z.ZodType<Prisma.integrationUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_used: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const integrationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.integrationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last_used: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const songCreateInputSchema: z.ZodType<Prisma.songCreateInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable(),
  duration: z.number().optional().nullable()
}).strict();

export const songUncheckedCreateInputSchema: z.ZodType<Prisma.songUncheckedCreateInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable(),
  duration: z.number().optional().nullable()
}).strict();

export const songUpdateInputSchema: z.ZodType<Prisma.songUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const songUncheckedUpdateInputSchema: z.ZodType<Prisma.songUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const songCreateManyInputSchema: z.ZodType<Prisma.songCreateManyInput> = z.object({
  id: z.string(),
  name: z.string().optional().nullable(),
  duration: z.number().optional().nullable()
}).strict();

export const songUpdateManyMutationInputSchema: z.ZodType<Prisma.songUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const songUncheckedUpdateManyInputSchema: z.ZodType<Prisma.songUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  duration: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const song_genreCreateInputSchema: z.ZodType<Prisma.song_genreCreateInput> = z.object({
  song_id: z.string(),
  genre_id: z.number().int()
}).strict();

export const song_genreUncheckedCreateInputSchema: z.ZodType<Prisma.song_genreUncheckedCreateInput> = z.object({
  song_id: z.string(),
  genre_id: z.number().int()
}).strict();

export const song_genreUpdateInputSchema: z.ZodType<Prisma.song_genreUpdateInput> = z.object({
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const song_genreUncheckedUpdateInputSchema: z.ZodType<Prisma.song_genreUncheckedUpdateInput> = z.object({
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const song_genreCreateManyInputSchema: z.ZodType<Prisma.song_genreCreateManyInput> = z.object({
  song_id: z.string(),
  genre_id: z.number().int()
}).strict();

export const song_genreUpdateManyMutationInputSchema: z.ZodType<Prisma.song_genreUpdateManyMutationInput> = z.object({
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const song_genreUncheckedUpdateManyInputSchema: z.ZodType<Prisma.song_genreUncheckedUpdateManyInput> = z.object({
  song_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const external_idsCreateInputSchema: z.ZodType<Prisma.external_idsCreateInput> = z.object({
  table_name: z.string(),
  id: z.number().int(),
  type: z.string().optional().nullable(),
  external_id: z.string().optional().nullable()
}).strict();

export const external_idsUncheckedCreateInputSchema: z.ZodType<Prisma.external_idsUncheckedCreateInput> = z.object({
  table_name: z.string(),
  id: z.number().int(),
  type: z.string().optional().nullable(),
  external_id: z.string().optional().nullable()
}).strict();

export const external_idsUpdateInputSchema: z.ZodType<Prisma.external_idsUpdateInput> = z.object({
  table_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  external_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const external_idsUncheckedUpdateInputSchema: z.ZodType<Prisma.external_idsUncheckedUpdateInput> = z.object({
  table_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  external_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const external_idsCreateManyInputSchema: z.ZodType<Prisma.external_idsCreateManyInput> = z.object({
  table_name: z.string(),
  id: z.number().int(),
  type: z.string().optional().nullable(),
  external_id: z.string().optional().nullable()
}).strict();

export const external_idsUpdateManyMutationInputSchema: z.ZodType<Prisma.external_idsUpdateManyMutationInput> = z.object({
  table_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  external_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const external_idsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.external_idsUncheckedUpdateManyInput> = z.object({
  table_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  external_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const song_genre_genreCreateInputSchema: z.ZodType<Prisma.song_genre_genreCreateInput> = z.object({
  song_genre_genre_id: z.number().int(),
  genre_id: z.number().int()
}).strict();

export const song_genre_genreUncheckedCreateInputSchema: z.ZodType<Prisma.song_genre_genreUncheckedCreateInput> = z.object({
  song_genre_genre_id: z.number().int(),
  genre_id: z.number().int()
}).strict();

export const song_genre_genreUpdateInputSchema: z.ZodType<Prisma.song_genre_genreUpdateInput> = z.object({
  song_genre_genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const song_genre_genreUncheckedUpdateInputSchema: z.ZodType<Prisma.song_genre_genreUncheckedUpdateInput> = z.object({
  song_genre_genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const song_genre_genreCreateManyInputSchema: z.ZodType<Prisma.song_genre_genreCreateManyInput> = z.object({
  song_genre_genre_id: z.number().int(),
  genre_id: z.number().int()
}).strict();

export const song_genre_genreUpdateManyMutationInputSchema: z.ZodType<Prisma.song_genre_genreUpdateManyMutationInput> = z.object({
  song_genre_genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const song_genre_genreUncheckedUpdateManyInputSchema: z.ZodType<Prisma.song_genre_genreUncheckedUpdateManyInput> = z.object({
  song_genre_genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  genre_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const userCreateInputSchema: z.ZodType<Prisma.userCreateInput> = z.object({
  username: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  pwdHash: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable()
}).strict();

export const userUncheckedCreateInputSchema: z.ZodType<Prisma.userUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  username: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  pwdHash: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable()
}).strict();

export const userUpdateInputSchema: z.ZodType<Prisma.userUpdateInput> = z.object({
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pwdHash: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const userUncheckedUpdateInputSchema: z.ZodType<Prisma.userUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pwdHash: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const userCreateManyInputSchema: z.ZodType<Prisma.userCreateManyInput> = z.object({
  id: z.number().int().optional(),
  username: z.string().optional().nullable(),
  firstName: z.string().optional().nullable(),
  lastName: z.string().optional().nullable(),
  role: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  pwdHash: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable()
}).strict();

export const userUpdateManyMutationInputSchema: z.ZodType<Prisma.userUpdateManyMutationInput> = z.object({
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pwdHash: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const userUncheckedUpdateManyInputSchema: z.ZodType<Prisma.userUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pwdHash: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const tokenCreateInputSchema: z.ZodType<Prisma.tokenCreateInput> = z.object({
  token: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  expiry: z.coerce.date().optional().nullable(),
  status: z.number().int().optional().nullable(),
  device_id: z.string().optional().nullable(),
  username: z.string().optional().nullable()
}).strict();

export const tokenUncheckedCreateInputSchema: z.ZodType<Prisma.tokenUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  token: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  expiry: z.coerce.date().optional().nullable(),
  status: z.number().int().optional().nullable(),
  device_id: z.string().optional().nullable(),
  username: z.string().optional().nullable()
}).strict();

export const tokenUpdateInputSchema: z.ZodType<Prisma.tokenUpdateInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiry: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  device_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const tokenUncheckedUpdateInputSchema: z.ZodType<Prisma.tokenUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiry: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  device_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const tokenCreateManyInputSchema: z.ZodType<Prisma.tokenCreateManyInput> = z.object({
  id: z.number().int().optional(),
  token: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  expiry: z.coerce.date().optional().nullable(),
  status: z.number().int().optional().nullable(),
  device_id: z.string().optional().nullable(),
  username: z.string().optional().nullable()
}).strict();

export const tokenUpdateManyMutationInputSchema: z.ZodType<Prisma.tokenUpdateManyMutationInput> = z.object({
  token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiry: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  device_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const tokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.tokenUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expiry: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  device_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  username: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const artistCountOrderByAggregateInputSchema: z.ZodType<Prisma.artistCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const artistMaxOrderByAggregateInputSchema: z.ZodType<Prisma.artistMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const artistMinOrderByAggregateInputSchema: z.ZodType<Prisma.artistMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const artist_genreArtist_idGenre_idCompoundUniqueInputSchema: z.ZodType<Prisma.artist_genreArtist_idGenre_idCompoundUniqueInput> = z.object({
  artist_id: z.string(),
  genre_id: z.number()
}).strict();

export const artist_genreCountOrderByAggregateInputSchema: z.ZodType<Prisma.artist_genreCountOrderByAggregateInput> = z.object({
  artist_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const artist_genreAvgOrderByAggregateInputSchema: z.ZodType<Prisma.artist_genreAvgOrderByAggregateInput> = z.object({
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const artist_genreMaxOrderByAggregateInputSchema: z.ZodType<Prisma.artist_genreMaxOrderByAggregateInput> = z.object({
  artist_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const artist_genreMinOrderByAggregateInputSchema: z.ZodType<Prisma.artist_genreMinOrderByAggregateInput> = z.object({
  artist_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const artist_genreSumOrderByAggregateInputSchema: z.ZodType<Prisma.artist_genreSumOrderByAggregateInput> = z.object({
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const artist_songArtist_idSong_idCompoundUniqueInputSchema: z.ZodType<Prisma.artist_songArtist_idSong_idCompoundUniqueInput> = z.object({
  artist_id: z.string(),
  song_id: z.string()
}).strict();

export const artist_songCountOrderByAggregateInputSchema: z.ZodType<Prisma.artist_songCountOrderByAggregateInput> = z.object({
  artist_id: z.lazy(() => SortOrderSchema).optional(),
  song_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const artist_songMaxOrderByAggregateInputSchema: z.ZodType<Prisma.artist_songMaxOrderByAggregateInput> = z.object({
  artist_id: z.lazy(() => SortOrderSchema).optional(),
  song_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const artist_songMinOrderByAggregateInputSchema: z.ZodType<Prisma.artist_songMinOrderByAggregateInput> = z.object({
  artist_id: z.lazy(() => SortOrderSchema).optional(),
  song_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const genreCountOrderByAggregateInputSchema: z.ZodType<Prisma.genreCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const genreAvgOrderByAggregateInputSchema: z.ZodType<Prisma.genreAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const genreMaxOrderByAggregateInputSchema: z.ZodType<Prisma.genreMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const genreMinOrderByAggregateInputSchema: z.ZodType<Prisma.genreMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  genre: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const genreSumOrderByAggregateInputSchema: z.ZodType<Prisma.genreSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const historyUser_idSong_idPlayed_atCompoundUniqueInputSchema: z.ZodType<Prisma.historyUser_idSong_idPlayed_atCompoundUniqueInput> = z.object({
  user_id: z.number(),
  song_id: z.string(),
  played_at: z.coerce.date()
}).strict();

export const historyCountOrderByAggregateInputSchema: z.ZodType<Prisma.historyCountOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  song_id: z.lazy(() => SortOrderSchema).optional(),
  played_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const historyAvgOrderByAggregateInputSchema: z.ZodType<Prisma.historyAvgOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const historyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.historyMaxOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  song_id: z.lazy(() => SortOrderSchema).optional(),
  played_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const historyMinOrderByAggregateInputSchema: z.ZodType<Prisma.historyMinOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional(),
  song_id: z.lazy(() => SortOrderSchema).optional(),
  played_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const historySumOrderByAggregateInputSchema: z.ZodType<Prisma.historySumOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const integrationIdProviderCompoundUniqueInputSchema: z.ZodType<Prisma.integrationIdProviderCompoundUniqueInput> = z.object({
  id: z.string(),
  provider: z.string()
}).strict();

export const integrationCountOrderByAggregateInputSchema: z.ZodType<Prisma.integrationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  last_used: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const integrationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.integrationAvgOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const integrationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.integrationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  last_used: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const integrationMinOrderByAggregateInputSchema: z.ZodType<Prisma.integrationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  user_id: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  last_used: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const integrationSumOrderByAggregateInputSchema: z.ZodType<Prisma.integrationSumOrderByAggregateInput> = z.object({
  user_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const FloatNullableFilterSchema: z.ZodType<Prisma.FloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const songCountOrderByAggregateInputSchema: z.ZodType<Prisma.songCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const songAvgOrderByAggregateInputSchema: z.ZodType<Prisma.songAvgOrderByAggregateInput> = z.object({
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const songMaxOrderByAggregateInputSchema: z.ZodType<Prisma.songMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const songMinOrderByAggregateInputSchema: z.ZodType<Prisma.songMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const songSumOrderByAggregateInputSchema: z.ZodType<Prisma.songSumOrderByAggregateInput> = z.object({
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const song_genreSong_idGenre_idCompoundUniqueInputSchema: z.ZodType<Prisma.song_genreSong_idGenre_idCompoundUniqueInput> = z.object({
  song_id: z.string(),
  genre_id: z.number()
}).strict();

export const song_genreCountOrderByAggregateInputSchema: z.ZodType<Prisma.song_genreCountOrderByAggregateInput> = z.object({
  song_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const song_genreAvgOrderByAggregateInputSchema: z.ZodType<Prisma.song_genreAvgOrderByAggregateInput> = z.object({
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const song_genreMaxOrderByAggregateInputSchema: z.ZodType<Prisma.song_genreMaxOrderByAggregateInput> = z.object({
  song_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const song_genreMinOrderByAggregateInputSchema: z.ZodType<Prisma.song_genreMinOrderByAggregateInput> = z.object({
  song_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const song_genreSumOrderByAggregateInputSchema: z.ZodType<Prisma.song_genreSumOrderByAggregateInput> = z.object({
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const external_idsTable_nameIdCompoundUniqueInputSchema: z.ZodType<Prisma.external_idsTable_nameIdCompoundUniqueInput> = z.object({
  table_name: z.string(),
  id: z.number()
}).strict();

export const external_idsCountOrderByAggregateInputSchema: z.ZodType<Prisma.external_idsCountOrderByAggregateInput> = z.object({
  table_name: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  external_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const external_idsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.external_idsAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const external_idsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.external_idsMaxOrderByAggregateInput> = z.object({
  table_name: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  external_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const external_idsMinOrderByAggregateInputSchema: z.ZodType<Prisma.external_idsMinOrderByAggregateInput> = z.object({
  table_name: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  external_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const external_idsSumOrderByAggregateInputSchema: z.ZodType<Prisma.external_idsSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const song_genre_genreSong_genre_genre_idGenre_idCompoundUniqueInputSchema: z.ZodType<Prisma.song_genre_genreSong_genre_genre_idGenre_idCompoundUniqueInput> = z.object({
  song_genre_genre_id: z.number(),
  genre_id: z.number()
}).strict();

export const song_genre_genreCountOrderByAggregateInputSchema: z.ZodType<Prisma.song_genre_genreCountOrderByAggregateInput> = z.object({
  song_genre_genre_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const song_genre_genreAvgOrderByAggregateInputSchema: z.ZodType<Prisma.song_genre_genreAvgOrderByAggregateInput> = z.object({
  song_genre_genre_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const song_genre_genreMaxOrderByAggregateInputSchema: z.ZodType<Prisma.song_genre_genreMaxOrderByAggregateInput> = z.object({
  song_genre_genre_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const song_genre_genreMinOrderByAggregateInputSchema: z.ZodType<Prisma.song_genre_genreMinOrderByAggregateInput> = z.object({
  song_genre_genre_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const song_genre_genreSumOrderByAggregateInputSchema: z.ZodType<Prisma.song_genre_genreSumOrderByAggregateInput> = z.object({
  song_genre_genre_id: z.lazy(() => SortOrderSchema).optional(),
  genre_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const userCountOrderByAggregateInputSchema: z.ZodType<Prisma.userCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  pwdHash: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const userAvgOrderByAggregateInputSchema: z.ZodType<Prisma.userAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const userMaxOrderByAggregateInputSchema: z.ZodType<Prisma.userMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  pwdHash: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const userMinOrderByAggregateInputSchema: z.ZodType<Prisma.userMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  pwdHash: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const userSumOrderByAggregateInputSchema: z.ZodType<Prisma.userSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const tokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.tokenCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  expiry: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const tokenAvgOrderByAggregateInputSchema: z.ZodType<Prisma.tokenAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const tokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.tokenMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  expiry: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const tokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.tokenMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  expiry: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  device_id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const tokenSumOrderByAggregateInputSchema: z.ZodType<Prisma.tokenSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const NullableFloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const artistFindFirstArgsSchema: z.ZodType<Prisma.artistFindFirstArgs> = z.object({
  select: artistSelectSchema.optional(),
  where: artistWhereInputSchema.optional(),
  orderBy: z.union([ artistOrderByWithRelationInputSchema.array(),artistOrderByWithRelationInputSchema ]).optional(),
  cursor: artistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArtistScalarFieldEnumSchema,ArtistScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const artistFindFirstOrThrowArgsSchema: z.ZodType<Prisma.artistFindFirstOrThrowArgs> = z.object({
  select: artistSelectSchema.optional(),
  where: artistWhereInputSchema.optional(),
  orderBy: z.union([ artistOrderByWithRelationInputSchema.array(),artistOrderByWithRelationInputSchema ]).optional(),
  cursor: artistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArtistScalarFieldEnumSchema,ArtistScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const artistFindManyArgsSchema: z.ZodType<Prisma.artistFindManyArgs> = z.object({
  select: artistSelectSchema.optional(),
  where: artistWhereInputSchema.optional(),
  orderBy: z.union([ artistOrderByWithRelationInputSchema.array(),artistOrderByWithRelationInputSchema ]).optional(),
  cursor: artistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArtistScalarFieldEnumSchema,ArtistScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const artistAggregateArgsSchema: z.ZodType<Prisma.artistAggregateArgs> = z.object({
  where: artistWhereInputSchema.optional(),
  orderBy: z.union([ artistOrderByWithRelationInputSchema.array(),artistOrderByWithRelationInputSchema ]).optional(),
  cursor: artistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const artistGroupByArgsSchema: z.ZodType<Prisma.artistGroupByArgs> = z.object({
  where: artistWhereInputSchema.optional(),
  orderBy: z.union([ artistOrderByWithAggregationInputSchema.array(),artistOrderByWithAggregationInputSchema ]).optional(),
  by: ArtistScalarFieldEnumSchema.array(),
  having: artistScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const artistFindUniqueArgsSchema: z.ZodType<Prisma.artistFindUniqueArgs> = z.object({
  select: artistSelectSchema.optional(),
  where: artistWhereUniqueInputSchema,
}).strict() ;

export const artistFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.artistFindUniqueOrThrowArgs> = z.object({
  select: artistSelectSchema.optional(),
  where: artistWhereUniqueInputSchema,
}).strict() ;

export const artist_genreFindFirstArgsSchema: z.ZodType<Prisma.artist_genreFindFirstArgs> = z.object({
  select: artist_genreSelectSchema.optional(),
  where: artist_genreWhereInputSchema.optional(),
  orderBy: z.union([ artist_genreOrderByWithRelationInputSchema.array(),artist_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: artist_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Artist_genreScalarFieldEnumSchema,Artist_genreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const artist_genreFindFirstOrThrowArgsSchema: z.ZodType<Prisma.artist_genreFindFirstOrThrowArgs> = z.object({
  select: artist_genreSelectSchema.optional(),
  where: artist_genreWhereInputSchema.optional(),
  orderBy: z.union([ artist_genreOrderByWithRelationInputSchema.array(),artist_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: artist_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Artist_genreScalarFieldEnumSchema,Artist_genreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const artist_genreFindManyArgsSchema: z.ZodType<Prisma.artist_genreFindManyArgs> = z.object({
  select: artist_genreSelectSchema.optional(),
  where: artist_genreWhereInputSchema.optional(),
  orderBy: z.union([ artist_genreOrderByWithRelationInputSchema.array(),artist_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: artist_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Artist_genreScalarFieldEnumSchema,Artist_genreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const artist_genreAggregateArgsSchema: z.ZodType<Prisma.artist_genreAggregateArgs> = z.object({
  where: artist_genreWhereInputSchema.optional(),
  orderBy: z.union([ artist_genreOrderByWithRelationInputSchema.array(),artist_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: artist_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const artist_genreGroupByArgsSchema: z.ZodType<Prisma.artist_genreGroupByArgs> = z.object({
  where: artist_genreWhereInputSchema.optional(),
  orderBy: z.union([ artist_genreOrderByWithAggregationInputSchema.array(),artist_genreOrderByWithAggregationInputSchema ]).optional(),
  by: Artist_genreScalarFieldEnumSchema.array(),
  having: artist_genreScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const artist_genreFindUniqueArgsSchema: z.ZodType<Prisma.artist_genreFindUniqueArgs> = z.object({
  select: artist_genreSelectSchema.optional(),
  where: artist_genreWhereUniqueInputSchema,
}).strict() ;

export const artist_genreFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.artist_genreFindUniqueOrThrowArgs> = z.object({
  select: artist_genreSelectSchema.optional(),
  where: artist_genreWhereUniqueInputSchema,
}).strict() ;

export const artist_songFindFirstArgsSchema: z.ZodType<Prisma.artist_songFindFirstArgs> = z.object({
  select: artist_songSelectSchema.optional(),
  where: artist_songWhereInputSchema.optional(),
  orderBy: z.union([ artist_songOrderByWithRelationInputSchema.array(),artist_songOrderByWithRelationInputSchema ]).optional(),
  cursor: artist_songWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Artist_songScalarFieldEnumSchema,Artist_songScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const artist_songFindFirstOrThrowArgsSchema: z.ZodType<Prisma.artist_songFindFirstOrThrowArgs> = z.object({
  select: artist_songSelectSchema.optional(),
  where: artist_songWhereInputSchema.optional(),
  orderBy: z.union([ artist_songOrderByWithRelationInputSchema.array(),artist_songOrderByWithRelationInputSchema ]).optional(),
  cursor: artist_songWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Artist_songScalarFieldEnumSchema,Artist_songScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const artist_songFindManyArgsSchema: z.ZodType<Prisma.artist_songFindManyArgs> = z.object({
  select: artist_songSelectSchema.optional(),
  where: artist_songWhereInputSchema.optional(),
  orderBy: z.union([ artist_songOrderByWithRelationInputSchema.array(),artist_songOrderByWithRelationInputSchema ]).optional(),
  cursor: artist_songWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Artist_songScalarFieldEnumSchema,Artist_songScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const artist_songAggregateArgsSchema: z.ZodType<Prisma.artist_songAggregateArgs> = z.object({
  where: artist_songWhereInputSchema.optional(),
  orderBy: z.union([ artist_songOrderByWithRelationInputSchema.array(),artist_songOrderByWithRelationInputSchema ]).optional(),
  cursor: artist_songWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const artist_songGroupByArgsSchema: z.ZodType<Prisma.artist_songGroupByArgs> = z.object({
  where: artist_songWhereInputSchema.optional(),
  orderBy: z.union([ artist_songOrderByWithAggregationInputSchema.array(),artist_songOrderByWithAggregationInputSchema ]).optional(),
  by: Artist_songScalarFieldEnumSchema.array(),
  having: artist_songScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const artist_songFindUniqueArgsSchema: z.ZodType<Prisma.artist_songFindUniqueArgs> = z.object({
  select: artist_songSelectSchema.optional(),
  where: artist_songWhereUniqueInputSchema,
}).strict() ;

export const artist_songFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.artist_songFindUniqueOrThrowArgs> = z.object({
  select: artist_songSelectSchema.optional(),
  where: artist_songWhereUniqueInputSchema,
}).strict() ;

export const genreFindFirstArgsSchema: z.ZodType<Prisma.genreFindFirstArgs> = z.object({
  select: genreSelectSchema.optional(),
  where: genreWhereInputSchema.optional(),
  orderBy: z.union([ genreOrderByWithRelationInputSchema.array(),genreOrderByWithRelationInputSchema ]).optional(),
  cursor: genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GenreScalarFieldEnumSchema,GenreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const genreFindFirstOrThrowArgsSchema: z.ZodType<Prisma.genreFindFirstOrThrowArgs> = z.object({
  select: genreSelectSchema.optional(),
  where: genreWhereInputSchema.optional(),
  orderBy: z.union([ genreOrderByWithRelationInputSchema.array(),genreOrderByWithRelationInputSchema ]).optional(),
  cursor: genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GenreScalarFieldEnumSchema,GenreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const genreFindManyArgsSchema: z.ZodType<Prisma.genreFindManyArgs> = z.object({
  select: genreSelectSchema.optional(),
  where: genreWhereInputSchema.optional(),
  orderBy: z.union([ genreOrderByWithRelationInputSchema.array(),genreOrderByWithRelationInputSchema ]).optional(),
  cursor: genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GenreScalarFieldEnumSchema,GenreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const genreAggregateArgsSchema: z.ZodType<Prisma.genreAggregateArgs> = z.object({
  where: genreWhereInputSchema.optional(),
  orderBy: z.union([ genreOrderByWithRelationInputSchema.array(),genreOrderByWithRelationInputSchema ]).optional(),
  cursor: genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const genreGroupByArgsSchema: z.ZodType<Prisma.genreGroupByArgs> = z.object({
  where: genreWhereInputSchema.optional(),
  orderBy: z.union([ genreOrderByWithAggregationInputSchema.array(),genreOrderByWithAggregationInputSchema ]).optional(),
  by: GenreScalarFieldEnumSchema.array(),
  having: genreScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const genreFindUniqueArgsSchema: z.ZodType<Prisma.genreFindUniqueArgs> = z.object({
  select: genreSelectSchema.optional(),
  where: genreWhereUniqueInputSchema,
}).strict() ;

export const genreFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.genreFindUniqueOrThrowArgs> = z.object({
  select: genreSelectSchema.optional(),
  where: genreWhereUniqueInputSchema,
}).strict() ;

export const historyFindFirstArgsSchema: z.ZodType<Prisma.historyFindFirstArgs> = z.object({
  select: historySelectSchema.optional(),
  where: historyWhereInputSchema.optional(),
  orderBy: z.union([ historyOrderByWithRelationInputSchema.array(),historyOrderByWithRelationInputSchema ]).optional(),
  cursor: historyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HistoryScalarFieldEnumSchema,HistoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const historyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.historyFindFirstOrThrowArgs> = z.object({
  select: historySelectSchema.optional(),
  where: historyWhereInputSchema.optional(),
  orderBy: z.union([ historyOrderByWithRelationInputSchema.array(),historyOrderByWithRelationInputSchema ]).optional(),
  cursor: historyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HistoryScalarFieldEnumSchema,HistoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const historyFindManyArgsSchema: z.ZodType<Prisma.historyFindManyArgs> = z.object({
  select: historySelectSchema.optional(),
  where: historyWhereInputSchema.optional(),
  orderBy: z.union([ historyOrderByWithRelationInputSchema.array(),historyOrderByWithRelationInputSchema ]).optional(),
  cursor: historyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HistoryScalarFieldEnumSchema,HistoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const historyAggregateArgsSchema: z.ZodType<Prisma.historyAggregateArgs> = z.object({
  where: historyWhereInputSchema.optional(),
  orderBy: z.union([ historyOrderByWithRelationInputSchema.array(),historyOrderByWithRelationInputSchema ]).optional(),
  cursor: historyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const historyGroupByArgsSchema: z.ZodType<Prisma.historyGroupByArgs> = z.object({
  where: historyWhereInputSchema.optional(),
  orderBy: z.union([ historyOrderByWithAggregationInputSchema.array(),historyOrderByWithAggregationInputSchema ]).optional(),
  by: HistoryScalarFieldEnumSchema.array(),
  having: historyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const historyFindUniqueArgsSchema: z.ZodType<Prisma.historyFindUniqueArgs> = z.object({
  select: historySelectSchema.optional(),
  where: historyWhereUniqueInputSchema,
}).strict() ;

export const historyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.historyFindUniqueOrThrowArgs> = z.object({
  select: historySelectSchema.optional(),
  where: historyWhereUniqueInputSchema,
}).strict() ;

export const integrationFindFirstArgsSchema: z.ZodType<Prisma.integrationFindFirstArgs> = z.object({
  select: integrationSelectSchema.optional(),
  where: integrationWhereInputSchema.optional(),
  orderBy: z.union([ integrationOrderByWithRelationInputSchema.array(),integrationOrderByWithRelationInputSchema ]).optional(),
  cursor: integrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IntegrationScalarFieldEnumSchema,IntegrationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const integrationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.integrationFindFirstOrThrowArgs> = z.object({
  select: integrationSelectSchema.optional(),
  where: integrationWhereInputSchema.optional(),
  orderBy: z.union([ integrationOrderByWithRelationInputSchema.array(),integrationOrderByWithRelationInputSchema ]).optional(),
  cursor: integrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IntegrationScalarFieldEnumSchema,IntegrationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const integrationFindManyArgsSchema: z.ZodType<Prisma.integrationFindManyArgs> = z.object({
  select: integrationSelectSchema.optional(),
  where: integrationWhereInputSchema.optional(),
  orderBy: z.union([ integrationOrderByWithRelationInputSchema.array(),integrationOrderByWithRelationInputSchema ]).optional(),
  cursor: integrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ IntegrationScalarFieldEnumSchema,IntegrationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const integrationAggregateArgsSchema: z.ZodType<Prisma.integrationAggregateArgs> = z.object({
  where: integrationWhereInputSchema.optional(),
  orderBy: z.union([ integrationOrderByWithRelationInputSchema.array(),integrationOrderByWithRelationInputSchema ]).optional(),
  cursor: integrationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const integrationGroupByArgsSchema: z.ZodType<Prisma.integrationGroupByArgs> = z.object({
  where: integrationWhereInputSchema.optional(),
  orderBy: z.union([ integrationOrderByWithAggregationInputSchema.array(),integrationOrderByWithAggregationInputSchema ]).optional(),
  by: IntegrationScalarFieldEnumSchema.array(),
  having: integrationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const integrationFindUniqueArgsSchema: z.ZodType<Prisma.integrationFindUniqueArgs> = z.object({
  select: integrationSelectSchema.optional(),
  where: integrationWhereUniqueInputSchema,
}).strict() ;

export const integrationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.integrationFindUniqueOrThrowArgs> = z.object({
  select: integrationSelectSchema.optional(),
  where: integrationWhereUniqueInputSchema,
}).strict() ;

export const songFindFirstArgsSchema: z.ZodType<Prisma.songFindFirstArgs> = z.object({
  select: songSelectSchema.optional(),
  where: songWhereInputSchema.optional(),
  orderBy: z.union([ songOrderByWithRelationInputSchema.array(),songOrderByWithRelationInputSchema ]).optional(),
  cursor: songWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SongScalarFieldEnumSchema,SongScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const songFindFirstOrThrowArgsSchema: z.ZodType<Prisma.songFindFirstOrThrowArgs> = z.object({
  select: songSelectSchema.optional(),
  where: songWhereInputSchema.optional(),
  orderBy: z.union([ songOrderByWithRelationInputSchema.array(),songOrderByWithRelationInputSchema ]).optional(),
  cursor: songWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SongScalarFieldEnumSchema,SongScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const songFindManyArgsSchema: z.ZodType<Prisma.songFindManyArgs> = z.object({
  select: songSelectSchema.optional(),
  where: songWhereInputSchema.optional(),
  orderBy: z.union([ songOrderByWithRelationInputSchema.array(),songOrderByWithRelationInputSchema ]).optional(),
  cursor: songWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SongScalarFieldEnumSchema,SongScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const songAggregateArgsSchema: z.ZodType<Prisma.songAggregateArgs> = z.object({
  where: songWhereInputSchema.optional(),
  orderBy: z.union([ songOrderByWithRelationInputSchema.array(),songOrderByWithRelationInputSchema ]).optional(),
  cursor: songWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const songGroupByArgsSchema: z.ZodType<Prisma.songGroupByArgs> = z.object({
  where: songWhereInputSchema.optional(),
  orderBy: z.union([ songOrderByWithAggregationInputSchema.array(),songOrderByWithAggregationInputSchema ]).optional(),
  by: SongScalarFieldEnumSchema.array(),
  having: songScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const songFindUniqueArgsSchema: z.ZodType<Prisma.songFindUniqueArgs> = z.object({
  select: songSelectSchema.optional(),
  where: songWhereUniqueInputSchema,
}).strict() ;

export const songFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.songFindUniqueOrThrowArgs> = z.object({
  select: songSelectSchema.optional(),
  where: songWhereUniqueInputSchema,
}).strict() ;

export const song_genreFindFirstArgsSchema: z.ZodType<Prisma.song_genreFindFirstArgs> = z.object({
  select: song_genreSelectSchema.optional(),
  where: song_genreWhereInputSchema.optional(),
  orderBy: z.union([ song_genreOrderByWithRelationInputSchema.array(),song_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: song_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Song_genreScalarFieldEnumSchema,Song_genreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const song_genreFindFirstOrThrowArgsSchema: z.ZodType<Prisma.song_genreFindFirstOrThrowArgs> = z.object({
  select: song_genreSelectSchema.optional(),
  where: song_genreWhereInputSchema.optional(),
  orderBy: z.union([ song_genreOrderByWithRelationInputSchema.array(),song_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: song_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Song_genreScalarFieldEnumSchema,Song_genreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const song_genreFindManyArgsSchema: z.ZodType<Prisma.song_genreFindManyArgs> = z.object({
  select: song_genreSelectSchema.optional(),
  where: song_genreWhereInputSchema.optional(),
  orderBy: z.union([ song_genreOrderByWithRelationInputSchema.array(),song_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: song_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Song_genreScalarFieldEnumSchema,Song_genreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const song_genreAggregateArgsSchema: z.ZodType<Prisma.song_genreAggregateArgs> = z.object({
  where: song_genreWhereInputSchema.optional(),
  orderBy: z.union([ song_genreOrderByWithRelationInputSchema.array(),song_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: song_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const song_genreGroupByArgsSchema: z.ZodType<Prisma.song_genreGroupByArgs> = z.object({
  where: song_genreWhereInputSchema.optional(),
  orderBy: z.union([ song_genreOrderByWithAggregationInputSchema.array(),song_genreOrderByWithAggregationInputSchema ]).optional(),
  by: Song_genreScalarFieldEnumSchema.array(),
  having: song_genreScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const song_genreFindUniqueArgsSchema: z.ZodType<Prisma.song_genreFindUniqueArgs> = z.object({
  select: song_genreSelectSchema.optional(),
  where: song_genreWhereUniqueInputSchema,
}).strict() ;

export const song_genreFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.song_genreFindUniqueOrThrowArgs> = z.object({
  select: song_genreSelectSchema.optional(),
  where: song_genreWhereUniqueInputSchema,
}).strict() ;

export const external_idsFindFirstArgsSchema: z.ZodType<Prisma.external_idsFindFirstArgs> = z.object({
  select: external_idsSelectSchema.optional(),
  where: external_idsWhereInputSchema.optional(),
  orderBy: z.union([ external_idsOrderByWithRelationInputSchema.array(),external_idsOrderByWithRelationInputSchema ]).optional(),
  cursor: external_idsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ External_idsScalarFieldEnumSchema,External_idsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const external_idsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.external_idsFindFirstOrThrowArgs> = z.object({
  select: external_idsSelectSchema.optional(),
  where: external_idsWhereInputSchema.optional(),
  orderBy: z.union([ external_idsOrderByWithRelationInputSchema.array(),external_idsOrderByWithRelationInputSchema ]).optional(),
  cursor: external_idsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ External_idsScalarFieldEnumSchema,External_idsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const external_idsFindManyArgsSchema: z.ZodType<Prisma.external_idsFindManyArgs> = z.object({
  select: external_idsSelectSchema.optional(),
  where: external_idsWhereInputSchema.optional(),
  orderBy: z.union([ external_idsOrderByWithRelationInputSchema.array(),external_idsOrderByWithRelationInputSchema ]).optional(),
  cursor: external_idsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ External_idsScalarFieldEnumSchema,External_idsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const external_idsAggregateArgsSchema: z.ZodType<Prisma.external_idsAggregateArgs> = z.object({
  where: external_idsWhereInputSchema.optional(),
  orderBy: z.union([ external_idsOrderByWithRelationInputSchema.array(),external_idsOrderByWithRelationInputSchema ]).optional(),
  cursor: external_idsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const external_idsGroupByArgsSchema: z.ZodType<Prisma.external_idsGroupByArgs> = z.object({
  where: external_idsWhereInputSchema.optional(),
  orderBy: z.union([ external_idsOrderByWithAggregationInputSchema.array(),external_idsOrderByWithAggregationInputSchema ]).optional(),
  by: External_idsScalarFieldEnumSchema.array(),
  having: external_idsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const external_idsFindUniqueArgsSchema: z.ZodType<Prisma.external_idsFindUniqueArgs> = z.object({
  select: external_idsSelectSchema.optional(),
  where: external_idsWhereUniqueInputSchema,
}).strict() ;

export const external_idsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.external_idsFindUniqueOrThrowArgs> = z.object({
  select: external_idsSelectSchema.optional(),
  where: external_idsWhereUniqueInputSchema,
}).strict() ;

export const song_genre_genreFindFirstArgsSchema: z.ZodType<Prisma.song_genre_genreFindFirstArgs> = z.object({
  select: song_genre_genreSelectSchema.optional(),
  where: song_genre_genreWhereInputSchema.optional(),
  orderBy: z.union([ song_genre_genreOrderByWithRelationInputSchema.array(),song_genre_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: song_genre_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Song_genre_genreScalarFieldEnumSchema,Song_genre_genreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const song_genre_genreFindFirstOrThrowArgsSchema: z.ZodType<Prisma.song_genre_genreFindFirstOrThrowArgs> = z.object({
  select: song_genre_genreSelectSchema.optional(),
  where: song_genre_genreWhereInputSchema.optional(),
  orderBy: z.union([ song_genre_genreOrderByWithRelationInputSchema.array(),song_genre_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: song_genre_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Song_genre_genreScalarFieldEnumSchema,Song_genre_genreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const song_genre_genreFindManyArgsSchema: z.ZodType<Prisma.song_genre_genreFindManyArgs> = z.object({
  select: song_genre_genreSelectSchema.optional(),
  where: song_genre_genreWhereInputSchema.optional(),
  orderBy: z.union([ song_genre_genreOrderByWithRelationInputSchema.array(),song_genre_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: song_genre_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Song_genre_genreScalarFieldEnumSchema,Song_genre_genreScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const song_genre_genreAggregateArgsSchema: z.ZodType<Prisma.song_genre_genreAggregateArgs> = z.object({
  where: song_genre_genreWhereInputSchema.optional(),
  orderBy: z.union([ song_genre_genreOrderByWithRelationInputSchema.array(),song_genre_genreOrderByWithRelationInputSchema ]).optional(),
  cursor: song_genre_genreWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const song_genre_genreGroupByArgsSchema: z.ZodType<Prisma.song_genre_genreGroupByArgs> = z.object({
  where: song_genre_genreWhereInputSchema.optional(),
  orderBy: z.union([ song_genre_genreOrderByWithAggregationInputSchema.array(),song_genre_genreOrderByWithAggregationInputSchema ]).optional(),
  by: Song_genre_genreScalarFieldEnumSchema.array(),
  having: song_genre_genreScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const song_genre_genreFindUniqueArgsSchema: z.ZodType<Prisma.song_genre_genreFindUniqueArgs> = z.object({
  select: song_genre_genreSelectSchema.optional(),
  where: song_genre_genreWhereUniqueInputSchema,
}).strict() ;

export const song_genre_genreFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.song_genre_genreFindUniqueOrThrowArgs> = z.object({
  select: song_genre_genreSelectSchema.optional(),
  where: song_genre_genreWhereUniqueInputSchema,
}).strict() ;

export const userFindFirstArgsSchema: z.ZodType<Prisma.userFindFirstArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithRelationInputSchema.array(),userOrderByWithRelationInputSchema ]).optional(),
  cursor: userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const userFindFirstOrThrowArgsSchema: z.ZodType<Prisma.userFindFirstOrThrowArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithRelationInputSchema.array(),userOrderByWithRelationInputSchema ]).optional(),
  cursor: userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const userFindManyArgsSchema: z.ZodType<Prisma.userFindManyArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithRelationInputSchema.array(),userOrderByWithRelationInputSchema ]).optional(),
  cursor: userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const userAggregateArgsSchema: z.ZodType<Prisma.userAggregateArgs> = z.object({
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithRelationInputSchema.array(),userOrderByWithRelationInputSchema ]).optional(),
  cursor: userWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const userGroupByArgsSchema: z.ZodType<Prisma.userGroupByArgs> = z.object({
  where: userWhereInputSchema.optional(),
  orderBy: z.union([ userOrderByWithAggregationInputSchema.array(),userOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: userScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const userFindUniqueArgsSchema: z.ZodType<Prisma.userFindUniqueArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereUniqueInputSchema,
}).strict() ;

export const userFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.userFindUniqueOrThrowArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereUniqueInputSchema,
}).strict() ;

export const tokenFindFirstArgsSchema: z.ZodType<Prisma.tokenFindFirstArgs> = z.object({
  select: tokenSelectSchema.optional(),
  where: tokenWhereInputSchema.optional(),
  orderBy: z.union([ tokenOrderByWithRelationInputSchema.array(),tokenOrderByWithRelationInputSchema ]).optional(),
  cursor: tokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TokenScalarFieldEnumSchema,TokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const tokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.tokenFindFirstOrThrowArgs> = z.object({
  select: tokenSelectSchema.optional(),
  where: tokenWhereInputSchema.optional(),
  orderBy: z.union([ tokenOrderByWithRelationInputSchema.array(),tokenOrderByWithRelationInputSchema ]).optional(),
  cursor: tokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TokenScalarFieldEnumSchema,TokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const tokenFindManyArgsSchema: z.ZodType<Prisma.tokenFindManyArgs> = z.object({
  select: tokenSelectSchema.optional(),
  where: tokenWhereInputSchema.optional(),
  orderBy: z.union([ tokenOrderByWithRelationInputSchema.array(),tokenOrderByWithRelationInputSchema ]).optional(),
  cursor: tokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TokenScalarFieldEnumSchema,TokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const tokenAggregateArgsSchema: z.ZodType<Prisma.tokenAggregateArgs> = z.object({
  where: tokenWhereInputSchema.optional(),
  orderBy: z.union([ tokenOrderByWithRelationInputSchema.array(),tokenOrderByWithRelationInputSchema ]).optional(),
  cursor: tokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const tokenGroupByArgsSchema: z.ZodType<Prisma.tokenGroupByArgs> = z.object({
  where: tokenWhereInputSchema.optional(),
  orderBy: z.union([ tokenOrderByWithAggregationInputSchema.array(),tokenOrderByWithAggregationInputSchema ]).optional(),
  by: TokenScalarFieldEnumSchema.array(),
  having: tokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const tokenFindUniqueArgsSchema: z.ZodType<Prisma.tokenFindUniqueArgs> = z.object({
  select: tokenSelectSchema.optional(),
  where: tokenWhereUniqueInputSchema,
}).strict() ;

export const tokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.tokenFindUniqueOrThrowArgs> = z.object({
  select: tokenSelectSchema.optional(),
  where: tokenWhereUniqueInputSchema,
}).strict() ;

export const artistCreateArgsSchema: z.ZodType<Prisma.artistCreateArgs> = z.object({
  select: artistSelectSchema.optional(),
  data: z.union([ artistCreateInputSchema,artistUncheckedCreateInputSchema ]),
}).strict() ;

export const artistUpsertArgsSchema: z.ZodType<Prisma.artistUpsertArgs> = z.object({
  select: artistSelectSchema.optional(),
  where: artistWhereUniqueInputSchema,
  create: z.union([ artistCreateInputSchema,artistUncheckedCreateInputSchema ]),
  update: z.union([ artistUpdateInputSchema,artistUncheckedUpdateInputSchema ]),
}).strict() ;

export const artistCreateManyArgsSchema: z.ZodType<Prisma.artistCreateManyArgs> = z.object({
  data: z.union([ artistCreateManyInputSchema,artistCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const artistDeleteArgsSchema: z.ZodType<Prisma.artistDeleteArgs> = z.object({
  select: artistSelectSchema.optional(),
  where: artistWhereUniqueInputSchema,
}).strict() ;

export const artistUpdateArgsSchema: z.ZodType<Prisma.artistUpdateArgs> = z.object({
  select: artistSelectSchema.optional(),
  data: z.union([ artistUpdateInputSchema,artistUncheckedUpdateInputSchema ]),
  where: artistWhereUniqueInputSchema,
}).strict() ;

export const artistUpdateManyArgsSchema: z.ZodType<Prisma.artistUpdateManyArgs> = z.object({
  data: z.union([ artistUpdateManyMutationInputSchema,artistUncheckedUpdateManyInputSchema ]),
  where: artistWhereInputSchema.optional(),
}).strict() ;

export const artistDeleteManyArgsSchema: z.ZodType<Prisma.artistDeleteManyArgs> = z.object({
  where: artistWhereInputSchema.optional(),
}).strict() ;

export const artist_genreCreateArgsSchema: z.ZodType<Prisma.artist_genreCreateArgs> = z.object({
  select: artist_genreSelectSchema.optional(),
  data: z.union([ artist_genreCreateInputSchema,artist_genreUncheckedCreateInputSchema ]),
}).strict() ;

export const artist_genreUpsertArgsSchema: z.ZodType<Prisma.artist_genreUpsertArgs> = z.object({
  select: artist_genreSelectSchema.optional(),
  where: artist_genreWhereUniqueInputSchema,
  create: z.union([ artist_genreCreateInputSchema,artist_genreUncheckedCreateInputSchema ]),
  update: z.union([ artist_genreUpdateInputSchema,artist_genreUncheckedUpdateInputSchema ]),
}).strict() ;

export const artist_genreCreateManyArgsSchema: z.ZodType<Prisma.artist_genreCreateManyArgs> = z.object({
  data: z.union([ artist_genreCreateManyInputSchema,artist_genreCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const artist_genreDeleteArgsSchema: z.ZodType<Prisma.artist_genreDeleteArgs> = z.object({
  select: artist_genreSelectSchema.optional(),
  where: artist_genreWhereUniqueInputSchema,
}).strict() ;

export const artist_genreUpdateArgsSchema: z.ZodType<Prisma.artist_genreUpdateArgs> = z.object({
  select: artist_genreSelectSchema.optional(),
  data: z.union([ artist_genreUpdateInputSchema,artist_genreUncheckedUpdateInputSchema ]),
  where: artist_genreWhereUniqueInputSchema,
}).strict() ;

export const artist_genreUpdateManyArgsSchema: z.ZodType<Prisma.artist_genreUpdateManyArgs> = z.object({
  data: z.union([ artist_genreUpdateManyMutationInputSchema,artist_genreUncheckedUpdateManyInputSchema ]),
  where: artist_genreWhereInputSchema.optional(),
}).strict() ;

export const artist_genreDeleteManyArgsSchema: z.ZodType<Prisma.artist_genreDeleteManyArgs> = z.object({
  where: artist_genreWhereInputSchema.optional(),
}).strict() ;

export const artist_songCreateArgsSchema: z.ZodType<Prisma.artist_songCreateArgs> = z.object({
  select: artist_songSelectSchema.optional(),
  data: z.union([ artist_songCreateInputSchema,artist_songUncheckedCreateInputSchema ]),
}).strict() ;

export const artist_songUpsertArgsSchema: z.ZodType<Prisma.artist_songUpsertArgs> = z.object({
  select: artist_songSelectSchema.optional(),
  where: artist_songWhereUniqueInputSchema,
  create: z.union([ artist_songCreateInputSchema,artist_songUncheckedCreateInputSchema ]),
  update: z.union([ artist_songUpdateInputSchema,artist_songUncheckedUpdateInputSchema ]),
}).strict() ;

export const artist_songCreateManyArgsSchema: z.ZodType<Prisma.artist_songCreateManyArgs> = z.object({
  data: z.union([ artist_songCreateManyInputSchema,artist_songCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const artist_songDeleteArgsSchema: z.ZodType<Prisma.artist_songDeleteArgs> = z.object({
  select: artist_songSelectSchema.optional(),
  where: artist_songWhereUniqueInputSchema,
}).strict() ;

export const artist_songUpdateArgsSchema: z.ZodType<Prisma.artist_songUpdateArgs> = z.object({
  select: artist_songSelectSchema.optional(),
  data: z.union([ artist_songUpdateInputSchema,artist_songUncheckedUpdateInputSchema ]),
  where: artist_songWhereUniqueInputSchema,
}).strict() ;

export const artist_songUpdateManyArgsSchema: z.ZodType<Prisma.artist_songUpdateManyArgs> = z.object({
  data: z.union([ artist_songUpdateManyMutationInputSchema,artist_songUncheckedUpdateManyInputSchema ]),
  where: artist_songWhereInputSchema.optional(),
}).strict() ;

export const artist_songDeleteManyArgsSchema: z.ZodType<Prisma.artist_songDeleteManyArgs> = z.object({
  where: artist_songWhereInputSchema.optional(),
}).strict() ;

export const genreCreateArgsSchema: z.ZodType<Prisma.genreCreateArgs> = z.object({
  select: genreSelectSchema.optional(),
  data: z.union([ genreCreateInputSchema,genreUncheckedCreateInputSchema ]),
}).strict() ;

export const genreUpsertArgsSchema: z.ZodType<Prisma.genreUpsertArgs> = z.object({
  select: genreSelectSchema.optional(),
  where: genreWhereUniqueInputSchema,
  create: z.union([ genreCreateInputSchema,genreUncheckedCreateInputSchema ]),
  update: z.union([ genreUpdateInputSchema,genreUncheckedUpdateInputSchema ]),
}).strict() ;

export const genreCreateManyArgsSchema: z.ZodType<Prisma.genreCreateManyArgs> = z.object({
  data: z.union([ genreCreateManyInputSchema,genreCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const genreDeleteArgsSchema: z.ZodType<Prisma.genreDeleteArgs> = z.object({
  select: genreSelectSchema.optional(),
  where: genreWhereUniqueInputSchema,
}).strict() ;

export const genreUpdateArgsSchema: z.ZodType<Prisma.genreUpdateArgs> = z.object({
  select: genreSelectSchema.optional(),
  data: z.union([ genreUpdateInputSchema,genreUncheckedUpdateInputSchema ]),
  where: genreWhereUniqueInputSchema,
}).strict() ;

export const genreUpdateManyArgsSchema: z.ZodType<Prisma.genreUpdateManyArgs> = z.object({
  data: z.union([ genreUpdateManyMutationInputSchema,genreUncheckedUpdateManyInputSchema ]),
  where: genreWhereInputSchema.optional(),
}).strict() ;

export const genreDeleteManyArgsSchema: z.ZodType<Prisma.genreDeleteManyArgs> = z.object({
  where: genreWhereInputSchema.optional(),
}).strict() ;

export const historyCreateArgsSchema: z.ZodType<Prisma.historyCreateArgs> = z.object({
  select: historySelectSchema.optional(),
  data: z.union([ historyCreateInputSchema,historyUncheckedCreateInputSchema ]),
}).strict() ;

export const historyUpsertArgsSchema: z.ZodType<Prisma.historyUpsertArgs> = z.object({
  select: historySelectSchema.optional(),
  where: historyWhereUniqueInputSchema,
  create: z.union([ historyCreateInputSchema,historyUncheckedCreateInputSchema ]),
  update: z.union([ historyUpdateInputSchema,historyUncheckedUpdateInputSchema ]),
}).strict() ;

export const historyCreateManyArgsSchema: z.ZodType<Prisma.historyCreateManyArgs> = z.object({
  data: z.union([ historyCreateManyInputSchema,historyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const historyDeleteArgsSchema: z.ZodType<Prisma.historyDeleteArgs> = z.object({
  select: historySelectSchema.optional(),
  where: historyWhereUniqueInputSchema,
}).strict() ;

export const historyUpdateArgsSchema: z.ZodType<Prisma.historyUpdateArgs> = z.object({
  select: historySelectSchema.optional(),
  data: z.union([ historyUpdateInputSchema,historyUncheckedUpdateInputSchema ]),
  where: historyWhereUniqueInputSchema,
}).strict() ;

export const historyUpdateManyArgsSchema: z.ZodType<Prisma.historyUpdateManyArgs> = z.object({
  data: z.union([ historyUpdateManyMutationInputSchema,historyUncheckedUpdateManyInputSchema ]),
  where: historyWhereInputSchema.optional(),
}).strict() ;

export const historyDeleteManyArgsSchema: z.ZodType<Prisma.historyDeleteManyArgs> = z.object({
  where: historyWhereInputSchema.optional(),
}).strict() ;

export const integrationCreateArgsSchema: z.ZodType<Prisma.integrationCreateArgs> = z.object({
  select: integrationSelectSchema.optional(),
  data: z.union([ integrationCreateInputSchema,integrationUncheckedCreateInputSchema ]),
}).strict() ;

export const integrationUpsertArgsSchema: z.ZodType<Prisma.integrationUpsertArgs> = z.object({
  select: integrationSelectSchema.optional(),
  where: integrationWhereUniqueInputSchema,
  create: z.union([ integrationCreateInputSchema,integrationUncheckedCreateInputSchema ]),
  update: z.union([ integrationUpdateInputSchema,integrationUncheckedUpdateInputSchema ]),
}).strict() ;

export const integrationCreateManyArgsSchema: z.ZodType<Prisma.integrationCreateManyArgs> = z.object({
  data: z.union([ integrationCreateManyInputSchema,integrationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const integrationDeleteArgsSchema: z.ZodType<Prisma.integrationDeleteArgs> = z.object({
  select: integrationSelectSchema.optional(),
  where: integrationWhereUniqueInputSchema,
}).strict() ;

export const integrationUpdateArgsSchema: z.ZodType<Prisma.integrationUpdateArgs> = z.object({
  select: integrationSelectSchema.optional(),
  data: z.union([ integrationUpdateInputSchema,integrationUncheckedUpdateInputSchema ]),
  where: integrationWhereUniqueInputSchema,
}).strict() ;

export const integrationUpdateManyArgsSchema: z.ZodType<Prisma.integrationUpdateManyArgs> = z.object({
  data: z.union([ integrationUpdateManyMutationInputSchema,integrationUncheckedUpdateManyInputSchema ]),
  where: integrationWhereInputSchema.optional(),
}).strict() ;

export const integrationDeleteManyArgsSchema: z.ZodType<Prisma.integrationDeleteManyArgs> = z.object({
  where: integrationWhereInputSchema.optional(),
}).strict() ;

export const songCreateArgsSchema: z.ZodType<Prisma.songCreateArgs> = z.object({
  select: songSelectSchema.optional(),
  data: z.union([ songCreateInputSchema,songUncheckedCreateInputSchema ]),
}).strict() ;

export const songUpsertArgsSchema: z.ZodType<Prisma.songUpsertArgs> = z.object({
  select: songSelectSchema.optional(),
  where: songWhereUniqueInputSchema,
  create: z.union([ songCreateInputSchema,songUncheckedCreateInputSchema ]),
  update: z.union([ songUpdateInputSchema,songUncheckedUpdateInputSchema ]),
}).strict() ;

export const songCreateManyArgsSchema: z.ZodType<Prisma.songCreateManyArgs> = z.object({
  data: z.union([ songCreateManyInputSchema,songCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const songDeleteArgsSchema: z.ZodType<Prisma.songDeleteArgs> = z.object({
  select: songSelectSchema.optional(),
  where: songWhereUniqueInputSchema,
}).strict() ;

export const songUpdateArgsSchema: z.ZodType<Prisma.songUpdateArgs> = z.object({
  select: songSelectSchema.optional(),
  data: z.union([ songUpdateInputSchema,songUncheckedUpdateInputSchema ]),
  where: songWhereUniqueInputSchema,
}).strict() ;

export const songUpdateManyArgsSchema: z.ZodType<Prisma.songUpdateManyArgs> = z.object({
  data: z.union([ songUpdateManyMutationInputSchema,songUncheckedUpdateManyInputSchema ]),
  where: songWhereInputSchema.optional(),
}).strict() ;

export const songDeleteManyArgsSchema: z.ZodType<Prisma.songDeleteManyArgs> = z.object({
  where: songWhereInputSchema.optional(),
}).strict() ;

export const song_genreCreateArgsSchema: z.ZodType<Prisma.song_genreCreateArgs> = z.object({
  select: song_genreSelectSchema.optional(),
  data: z.union([ song_genreCreateInputSchema,song_genreUncheckedCreateInputSchema ]),
}).strict() ;

export const song_genreUpsertArgsSchema: z.ZodType<Prisma.song_genreUpsertArgs> = z.object({
  select: song_genreSelectSchema.optional(),
  where: song_genreWhereUniqueInputSchema,
  create: z.union([ song_genreCreateInputSchema,song_genreUncheckedCreateInputSchema ]),
  update: z.union([ song_genreUpdateInputSchema,song_genreUncheckedUpdateInputSchema ]),
}).strict() ;

export const song_genreCreateManyArgsSchema: z.ZodType<Prisma.song_genreCreateManyArgs> = z.object({
  data: z.union([ song_genreCreateManyInputSchema,song_genreCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const song_genreDeleteArgsSchema: z.ZodType<Prisma.song_genreDeleteArgs> = z.object({
  select: song_genreSelectSchema.optional(),
  where: song_genreWhereUniqueInputSchema,
}).strict() ;

export const song_genreUpdateArgsSchema: z.ZodType<Prisma.song_genreUpdateArgs> = z.object({
  select: song_genreSelectSchema.optional(),
  data: z.union([ song_genreUpdateInputSchema,song_genreUncheckedUpdateInputSchema ]),
  where: song_genreWhereUniqueInputSchema,
}).strict() ;

export const song_genreUpdateManyArgsSchema: z.ZodType<Prisma.song_genreUpdateManyArgs> = z.object({
  data: z.union([ song_genreUpdateManyMutationInputSchema,song_genreUncheckedUpdateManyInputSchema ]),
  where: song_genreWhereInputSchema.optional(),
}).strict() ;

export const song_genreDeleteManyArgsSchema: z.ZodType<Prisma.song_genreDeleteManyArgs> = z.object({
  where: song_genreWhereInputSchema.optional(),
}).strict() ;

export const external_idsCreateArgsSchema: z.ZodType<Prisma.external_idsCreateArgs> = z.object({
  select: external_idsSelectSchema.optional(),
  data: z.union([ external_idsCreateInputSchema,external_idsUncheckedCreateInputSchema ]),
}).strict() ;

export const external_idsUpsertArgsSchema: z.ZodType<Prisma.external_idsUpsertArgs> = z.object({
  select: external_idsSelectSchema.optional(),
  where: external_idsWhereUniqueInputSchema,
  create: z.union([ external_idsCreateInputSchema,external_idsUncheckedCreateInputSchema ]),
  update: z.union([ external_idsUpdateInputSchema,external_idsUncheckedUpdateInputSchema ]),
}).strict() ;

export const external_idsCreateManyArgsSchema: z.ZodType<Prisma.external_idsCreateManyArgs> = z.object({
  data: z.union([ external_idsCreateManyInputSchema,external_idsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const external_idsDeleteArgsSchema: z.ZodType<Prisma.external_idsDeleteArgs> = z.object({
  select: external_idsSelectSchema.optional(),
  where: external_idsWhereUniqueInputSchema,
}).strict() ;

export const external_idsUpdateArgsSchema: z.ZodType<Prisma.external_idsUpdateArgs> = z.object({
  select: external_idsSelectSchema.optional(),
  data: z.union([ external_idsUpdateInputSchema,external_idsUncheckedUpdateInputSchema ]),
  where: external_idsWhereUniqueInputSchema,
}).strict() ;

export const external_idsUpdateManyArgsSchema: z.ZodType<Prisma.external_idsUpdateManyArgs> = z.object({
  data: z.union([ external_idsUpdateManyMutationInputSchema,external_idsUncheckedUpdateManyInputSchema ]),
  where: external_idsWhereInputSchema.optional(),
}).strict() ;

export const external_idsDeleteManyArgsSchema: z.ZodType<Prisma.external_idsDeleteManyArgs> = z.object({
  where: external_idsWhereInputSchema.optional(),
}).strict() ;

export const song_genre_genreCreateArgsSchema: z.ZodType<Prisma.song_genre_genreCreateArgs> = z.object({
  select: song_genre_genreSelectSchema.optional(),
  data: z.union([ song_genre_genreCreateInputSchema,song_genre_genreUncheckedCreateInputSchema ]),
}).strict() ;

export const song_genre_genreUpsertArgsSchema: z.ZodType<Prisma.song_genre_genreUpsertArgs> = z.object({
  select: song_genre_genreSelectSchema.optional(),
  where: song_genre_genreWhereUniqueInputSchema,
  create: z.union([ song_genre_genreCreateInputSchema,song_genre_genreUncheckedCreateInputSchema ]),
  update: z.union([ song_genre_genreUpdateInputSchema,song_genre_genreUncheckedUpdateInputSchema ]),
}).strict() ;

export const song_genre_genreCreateManyArgsSchema: z.ZodType<Prisma.song_genre_genreCreateManyArgs> = z.object({
  data: z.union([ song_genre_genreCreateManyInputSchema,song_genre_genreCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const song_genre_genreDeleteArgsSchema: z.ZodType<Prisma.song_genre_genreDeleteArgs> = z.object({
  select: song_genre_genreSelectSchema.optional(),
  where: song_genre_genreWhereUniqueInputSchema,
}).strict() ;

export const song_genre_genreUpdateArgsSchema: z.ZodType<Prisma.song_genre_genreUpdateArgs> = z.object({
  select: song_genre_genreSelectSchema.optional(),
  data: z.union([ song_genre_genreUpdateInputSchema,song_genre_genreUncheckedUpdateInputSchema ]),
  where: song_genre_genreWhereUniqueInputSchema,
}).strict() ;

export const song_genre_genreUpdateManyArgsSchema: z.ZodType<Prisma.song_genre_genreUpdateManyArgs> = z.object({
  data: z.union([ song_genre_genreUpdateManyMutationInputSchema,song_genre_genreUncheckedUpdateManyInputSchema ]),
  where: song_genre_genreWhereInputSchema.optional(),
}).strict() ;

export const song_genre_genreDeleteManyArgsSchema: z.ZodType<Prisma.song_genre_genreDeleteManyArgs> = z.object({
  where: song_genre_genreWhereInputSchema.optional(),
}).strict() ;

export const userCreateArgsSchema: z.ZodType<Prisma.userCreateArgs> = z.object({
  select: userSelectSchema.optional(),
  data: z.union([ userCreateInputSchema,userUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const userUpsertArgsSchema: z.ZodType<Prisma.userUpsertArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereUniqueInputSchema,
  create: z.union([ userCreateInputSchema,userUncheckedCreateInputSchema ]),
  update: z.union([ userUpdateInputSchema,userUncheckedUpdateInputSchema ]),
}).strict() ;

export const userCreateManyArgsSchema: z.ZodType<Prisma.userCreateManyArgs> = z.object({
  data: z.union([ userCreateManyInputSchema,userCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const userDeleteArgsSchema: z.ZodType<Prisma.userDeleteArgs> = z.object({
  select: userSelectSchema.optional(),
  where: userWhereUniqueInputSchema,
}).strict() ;

export const userUpdateArgsSchema: z.ZodType<Prisma.userUpdateArgs> = z.object({
  select: userSelectSchema.optional(),
  data: z.union([ userUpdateInputSchema,userUncheckedUpdateInputSchema ]),
  where: userWhereUniqueInputSchema,
}).strict() ;

export const userUpdateManyArgsSchema: z.ZodType<Prisma.userUpdateManyArgs> = z.object({
  data: z.union([ userUpdateManyMutationInputSchema,userUncheckedUpdateManyInputSchema ]),
  where: userWhereInputSchema.optional(),
}).strict() ;

export const userDeleteManyArgsSchema: z.ZodType<Prisma.userDeleteManyArgs> = z.object({
  where: userWhereInputSchema.optional(),
}).strict() ;

export const tokenCreateArgsSchema: z.ZodType<Prisma.tokenCreateArgs> = z.object({
  select: tokenSelectSchema.optional(),
  data: z.union([ tokenCreateInputSchema,tokenUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const tokenUpsertArgsSchema: z.ZodType<Prisma.tokenUpsertArgs> = z.object({
  select: tokenSelectSchema.optional(),
  where: tokenWhereUniqueInputSchema,
  create: z.union([ tokenCreateInputSchema,tokenUncheckedCreateInputSchema ]),
  update: z.union([ tokenUpdateInputSchema,tokenUncheckedUpdateInputSchema ]),
}).strict() ;

export const tokenCreateManyArgsSchema: z.ZodType<Prisma.tokenCreateManyArgs> = z.object({
  data: z.union([ tokenCreateManyInputSchema,tokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const tokenDeleteArgsSchema: z.ZodType<Prisma.tokenDeleteArgs> = z.object({
  select: tokenSelectSchema.optional(),
  where: tokenWhereUniqueInputSchema,
}).strict() ;

export const tokenUpdateArgsSchema: z.ZodType<Prisma.tokenUpdateArgs> = z.object({
  select: tokenSelectSchema.optional(),
  data: z.union([ tokenUpdateInputSchema,tokenUncheckedUpdateInputSchema ]),
  where: tokenWhereUniqueInputSchema,
}).strict() ;

export const tokenUpdateManyArgsSchema: z.ZodType<Prisma.tokenUpdateManyArgs> = z.object({
  data: z.union([ tokenUpdateManyMutationInputSchema,tokenUncheckedUpdateManyInputSchema ]),
  where: tokenWhereInputSchema.optional(),
}).strict() ;

export const tokenDeleteManyArgsSchema: z.ZodType<Prisma.tokenDeleteManyArgs> = z.object({
  where: tokenWhereInputSchema.optional(),
}).strict() ;