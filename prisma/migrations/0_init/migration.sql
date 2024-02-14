-- CreateTable
CREATE TABLE `artist` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `artist_genre` (
    `artist_id` VARCHAR(255) NOT NULL,
    `genre_id` INTEGER NOT NULL,

    PRIMARY KEY (`artist_id`, `genre_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `artist_song` (
    `artist_id` VARCHAR(255) NOT NULL,
    `song_id` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`artist_id`, `song_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `genre` (
    `id` INTEGER NOT NULL,
    `genre` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history` (
    `user_id` INTEGER NOT NULL,
    `song_id` VARCHAR(255) NOT NULL,
    `played_at` TIMESTAMP(0) NOT NULL,

    PRIMARY KEY (`user_id`, `song_id`, `played_at`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `integration` (
    `id` VARCHAR(255) NOT NULL,
    `provider` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NULL,
    `refresh_token` VARCHAR(255) NULL,
    `status` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `last_used` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`, `provider`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `song` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,
    `duration` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `song_genre` (
    `song_id` VARCHAR(255) NOT NULL,
    `genre_id` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`song_id`, `genre_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NULL,
    `role` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL,
    `firstName` VARCHAR(255) NULL,
    `lastName` VARCHAR(255) NULL,
    `pwdHash` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

