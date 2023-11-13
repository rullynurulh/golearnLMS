/*
 Navicat Premium Data Transfer

 Source Server         : nurul
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : localhost:3306
 Source Schema         : e_learning

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 09/11/2023 20:50:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for about_us_contents
-- ----------------------------
DROP TABLE IF EXISTS `about_us_contents`;
CREATE TABLE `about_us_contents`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `why_choose_me_text` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `our_mission_text` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `our_vision_text` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of about_us_contents
-- ----------------------------
INSERT INTO `about_us_contents` VALUES (1, 'images/about-us-content/about-us.jpg', 'About Us', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', '2023-10-17 05:04:52', '2023-10-17 05:04:52');

-- ----------------------------
-- Table structure for account_contents
-- ----------------------------
DROP TABLE IF EXISTS `account_contents`;
CREATE TABLE `account_contents`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `site_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account_contents
-- ----------------------------
INSERT INTO `account_contents` VALUES (1, 'images/account-content/logo_golearn.png', 'GoLearn', 'golearn@email.com', '08123456789', 'Indonesia', 'Jl. Raya Bogor No. 1, Jakarta Timur', '2023-10-17 05:04:52', '2023-10-17 05:04:52');

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, 'math', 'images/category-image/course.jpg', 'active', '2023-10-17 05:04:52', '2023-10-17 05:04:52');

-- ----------------------------
-- Table structure for certificate_settings
-- ----------------------------
DROP TABLE IF EXISTS `certificate_settings`;
CREATE TABLE `certificate_settings`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `show_logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `position_logo_x` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `position_logo_y` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `show_student` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `position_student_x` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `position_student_y` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `font_size` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `text_1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `text_2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `body_position` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `show_course` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `show_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `footer_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `signature_height` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `signature_width` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of certificate_settings
-- ----------------------------
INSERT INTO `certificate_settings` VALUES (1, 'yes', '1675', '110', 'yes', '50', '30', '3', 'This is to certify that', 'has successfully completed the course', 'center', 'yes', 'yes', 'Certificate of Completion', '150', '150', '2023-10-17 05:04:52', '2023-10-17 05:04:52');

-- ----------------------------
-- Table structure for certificates
-- ----------------------------
DROP TABLE IF EXISTS `certificates`;
CREATE TABLE `certificates`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `background_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `teacher_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `signature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of certificates
-- ----------------------------

-- ----------------------------
-- Table structure for chapters
-- ----------------------------
DROP TABLE IF EXISTS `chapters`;
CREATE TABLE `chapters`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `courses` bigint(0) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `chapters_courses_foreign`(`courses`) USING BTREE,
  CONSTRAINT `chapters_courses_foreign` FOREIGN KEY (`courses`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chapters
-- ----------------------------

-- ----------------------------
-- Table structure for course_certificates
-- ----------------------------
DROP TABLE IF EXISTS `course_certificates`;
CREATE TABLE `course_certificates`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `course` bigint(0) UNSIGNED NOT NULL,
  `certificate` bigint(0) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `course_certificates_course_foreign`(`course`) USING BTREE,
  INDEX `course_certificates_certificate_foreign`(`certificate`) USING BTREE,
  CONSTRAINT `course_certificates_certificate_foreign` FOREIGN KEY (`certificate`) REFERENCES `certificates` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `course_certificates_course_foreign` FOREIGN KEY (`course`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of course_certificates
-- ----------------------------

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `class_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `instructor` bigint(0) UNSIGNED NOT NULL,
  `categories` bigint(0) UNSIGNED NOT NULL,
  `requirement` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `outcome` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `sequence` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `courses_instructor_foreign`(`instructor`) USING BTREE,
  INDEX `courses_categories_foreign`(`categories`) USING BTREE,
  CONSTRAINT `courses_categories_foreign` FOREIGN KEY (`categories`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `courses_instructor_foreign` FOREIGN KEY (`instructor`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of courses
-- ----------------------------

-- ----------------------------
-- Table structure for curricula
-- ----------------------------
DROP TABLE IF EXISTS `curricula`;
CREATE TABLE `curricula`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `courses` bigint(0) UNSIGNED NOT NULL,
  `chapter` bigint(0) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `privacy` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `curricula_courses_foreign`(`courses`) USING BTREE,
  INDEX `curricula_chapter_foreign`(`chapter`) USING BTREE,
  CONSTRAINT `curricula_chapter_foreign` FOREIGN KEY (`chapter`) REFERENCES `chapters` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `curricula_courses_foreign` FOREIGN KEY (`courses`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of curricula
-- ----------------------------

-- ----------------------------
-- Table structure for curriculum_quizzes
-- ----------------------------
DROP TABLE IF EXISTS `curriculum_quizzes`;
CREATE TABLE `curriculum_quizzes`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `curriculum` bigint(0) UNSIGNED NOT NULL,
  `quiz` bigint(0) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `curriculum_quizzes_curriculum_foreign`(`curriculum`) USING BTREE,
  INDEX `curriculum_quizzes_quiz_foreign`(`quiz`) USING BTREE,
  CONSTRAINT `curriculum_quizzes_curriculum_foreign` FOREIGN KEY (`curriculum`) REFERENCES `curricula` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `curriculum_quizzes_quiz_foreign` FOREIGN KEY (`quiz`) REFERENCES `quizzes` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of curriculum_quizzes
-- ----------------------------

-- ----------------------------
-- Table structure for curriculum_visiteds
-- ----------------------------
DROP TABLE IF EXISTS `curriculum_visiteds`;
CREATE TABLE `curriculum_visiteds`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `enrolled` bigint(0) UNSIGNED NOT NULL,
  `curriculum` bigint(0) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `curriculum_visiteds_enrolled_foreign`(`enrolled`) USING BTREE,
  INDEX `curriculum_visiteds_curriculum_foreign`(`curriculum`) USING BTREE,
  CONSTRAINT `curriculum_visiteds_curriculum_foreign` FOREIGN KEY (`curriculum`) REFERENCES `curricula` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `curriculum_visiteds_enrolled_foreign` FOREIGN KEY (`enrolled`) REFERENCES `enrolleds` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of curriculum_visiteds
-- ----------------------------

-- ----------------------------
-- Table structure for enrolleds
-- ----------------------------
DROP TABLE IF EXISTS `enrolleds`;
CREATE TABLE `enrolleds`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `courses` bigint(0) UNSIGNED NOT NULL,
  `student` bigint(0) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `enrolleds_courses_foreign`(`courses`) USING BTREE,
  INDEX `enrolleds_student_foreign`(`student`) USING BTREE,
  CONSTRAINT `enrolleds_courses_foreign` FOREIGN KEY (`courses`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `enrolleds_student_foreign` FOREIGN KEY (`student`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of enrolleds
-- ----------------------------

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `failed_jobs_uuid_unique`(`uuid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for footer_contents
-- ----------------------------
DROP TABLE IF EXISTS `footer_contents`;
CREATE TABLE `footer_contents`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `copyright_text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of footer_contents
-- ----------------------------
INSERT INTO `footer_contents` VALUES (1, 'Copyright © 2023 GoLearnLMS.\r\n            All rights reserved | Made By Ruly Nurul H', '2023-10-17 05:04:52', '2023-10-17 05:04:52');

-- ----------------------------
-- Table structure for home_contents
-- ----------------------------
DROP TABLE IF EXISTS `home_contents`;
CREATE TABLE `home_contents`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_text` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_list_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_max_section_show` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `about_us_section_in_home_page` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `about_us_section_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_section_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `teacher_section_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of home_contents
-- ----------------------------
INSERT INTO `home_contents` VALUES (1, 'images/home-content/bg-slider.jpg', 'Lorem ipsum dolor', 'Lorem ipsum dolor sit amet consectetur.  Eros ullamcorper consectetur pretium  egestas turpis. Mattis ornare vitae enim a sit accumsan.', 'Best Platform  To learn  Everything', '5', 'yes', 'Welcome To Go Learn!', 'Featured Courses', 'Meet Our Teacher', '2023-10-17 05:04:52', '2023-10-17 10:30:27');

-- ----------------------------
-- Table structure for lessons
-- ----------------------------
DROP TABLE IF EXISTS `lessons`;
CREATE TABLE `lessons`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `curriculum` bigint(0) UNSIGNED NOT NULL,
  `duration` bigint(0) UNSIGNED NOT NULL,
  `source` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `lessons_curriculum_foreign`(`curriculum`) USING BTREE,
  CONSTRAINT `lessons_curriculum_foreign` FOREIGN KEY (`curriculum`) REFERENCES `curricula` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of lessons
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, '2014_10_12_000000_create_users_table', 1);
INSERT INTO `migrations` VALUES (2, '2014_10_12_100000_create_password_resets_table', 1);
INSERT INTO `migrations` VALUES (3, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (4, '2019_12_14_000001_create_personal_access_tokens_table', 1);
INSERT INTO `migrations` VALUES (5, '2023_07_14_072022_create_categories_table', 1);
INSERT INTO `migrations` VALUES (6, '2023_07_16_054730_create_courses_table', 1);
INSERT INTO `migrations` VALUES (7, '2023_07_16_074314_create_chapters_table', 1);
INSERT INTO `migrations` VALUES (8, '2023_07_16_101119_create_curricula_table', 1);
INSERT INTO `migrations` VALUES (9, '2023_07_16_104428_create_lessons_table', 1);
INSERT INTO `migrations` VALUES (10, '2023_07_17_041357_create_quizzes_table', 1);
INSERT INTO `migrations` VALUES (11, '2023_07_18_060747_create_questions_table', 1);
INSERT INTO `migrations` VALUES (12, '2023_07_19_140259_create_enrolleds_table', 1);
INSERT INTO `migrations` VALUES (13, '2023_07_20_135353_create_curriculum_quizzes_table', 1);
INSERT INTO `migrations` VALUES (14, '2023_07_23_101928_create_quiz_results_table', 1);
INSERT INTO `migrations` VALUES (15, '2023_07_24_040242_create_home_contents_table', 1);
INSERT INTO `migrations` VALUES (16, '2023_07_24_044008_create_social_contents_table', 1);
INSERT INTO `migrations` VALUES (17, '2023_07_24_053115_create_footer_contents_table', 1);
INSERT INTO `migrations` VALUES (18, '2023_07_24_063055_create_about_us_contents_table', 1);
INSERT INTO `migrations` VALUES (19, '2023_07_24_065602_create_account_contents_table', 1);
INSERT INTO `migrations` VALUES (20, '2023_07_25_075036_create_quiz_help_modes_table', 1);
INSERT INTO `migrations` VALUES (21, '2023_08_06_112419_create_certificate_settings_table', 1);
INSERT INTO `migrations` VALUES (22, '2023_08_06_174929_create_certificates_table', 1);
INSERT INTO `migrations` VALUES (23, '2023_08_12_070317_create_course_certificates_table', 1);
INSERT INTO `migrations` VALUES (24, '2023_08_18_074936_create_curriculum_visiteds_table', 1);

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for personal_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(0) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `last_used_at` timestamp(0) NULL DEFAULT NULL,
  `expires_at` timestamp(0) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `personal_access_tokens_token_unique`(`token`) USING BTREE,
  INDEX `personal_access_tokens_tokenable_type_tokenable_id_index`(`tokenable_type`, `tokenable_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of personal_access_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `quiz` bigint(0) UNSIGNED NOT NULL,
  `file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `question` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `option_a` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `option_b` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `option_c` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `option_d` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `answer` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `questions_quiz_foreign`(`quiz`) USING BTREE,
  CONSTRAINT `questions_quiz_foreign` FOREIGN KEY (`quiz`) REFERENCES `quizzes` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of questions
-- ----------------------------

-- ----------------------------
-- Table structure for quiz_help_modes
-- ----------------------------
DROP TABLE IF EXISTS `quiz_help_modes`;
CREATE TABLE `quiz_help_modes`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `max_help_mode` bigint(0) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of quiz_help_modes
-- ----------------------------

-- ----------------------------
-- Table structure for quiz_results
-- ----------------------------
DROP TABLE IF EXISTS `quiz_results`;
CREATE TABLE `quiz_results`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `enrolled` bigint(0) UNSIGNED NOT NULL,
  `quiz` bigint(0) UNSIGNED NOT NULL,
  `correct_answer` bigint(0) UNSIGNED NOT NULL,
  `wrong_answer` bigint(0) UNSIGNED NOT NULL,
  `total_question` bigint(0) UNSIGNED NOT NULL,
  `duration` bigint(0) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `quiz_results_enrolled_foreign`(`enrolled`) USING BTREE,
  INDEX `quiz_results_quiz_foreign`(`quiz`) USING BTREE,
  CONSTRAINT `quiz_results_enrolled_foreign` FOREIGN KEY (`enrolled`) REFERENCES `enrolleds` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `quiz_results_quiz_foreign` FOREIGN KEY (`quiz`) REFERENCES `quizzes` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of quiz_results
-- ----------------------------

-- ----------------------------
-- Table structure for quizzes
-- ----------------------------
DROP TABLE IF EXISTS `quizzes`;
CREATE TABLE `quizzes`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `min_percentage` bigint(0) UNSIGNED NOT NULL,
  `help_mode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of quizzes
-- ----------------------------

-- ----------------------------
-- Table structure for social_contents
-- ----------------------------
DROP TABLE IF EXISTS `social_contents`;
CREATE TABLE `social_contents`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `social_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of social_contents
-- ----------------------------
INSERT INTO `social_contents` VALUES (1, 'images/social-content/icon_golearn.png', 'https://www.golearn.id/', 'GoLearn', '2023-10-17 05:04:52', '2023-10-17 05:04:52');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `birthday` date NULL DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `state` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `about` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp(0) NULL DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'asep', 'asep@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'teacher', 'active', '$2y$10$/CiWmkk.GDfrECH/LZrji.AXDeKPqNbbVEixdq.DnYgGd/OIQSlLC', NULL, NULL, '2023-10-17 05:04:51', '2023-10-17 05:04:51');
INSERT INTO `users` VALUES (2, 'firman', 'firman@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'teacher', 'active', '$2y$10$vAm7CgOKj0pJYi8T02uuO.SIokNm2H1dhDatqB7dccPaW6Ho8b86q', NULL, NULL, '2023-10-17 05:04:51', '2023-10-17 05:04:51');
INSERT INTO `users` VALUES (3, 'john', 'john@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'teacher', 'active', '$2y$10$D.QLUt0KAKkdDbH0OUgMNOMnbJNJWZYfagNk/C6IRU5fvrYp7OkNW', NULL, NULL, '2023-10-17 05:04:51', '2023-10-17 05:04:51');
INSERT INTO `users` VALUES (4, 'alex', 'alex@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'teacher', 'active', '$2y$10$rq6pHOVFLQ24IkA43KhJ8OZ63dB8TNNEhoqFIY1/GgRMYdr8TK7za', NULL, NULL, '2023-10-17 05:04:51', '2023-10-17 05:04:51');
INSERT INTO `users` VALUES (5, 'admin', 'admin@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'active', '$2y$10$vw0A9re6SP19bbY/FsMtc.PdX8HfB.Dikz3gHoMqEy0vBP3sBn8QK', NULL, NULL, '2023-10-17 05:04:52', '2023-10-17 05:04:52');

SET FOREIGN_KEY_CHECKS = 1;
