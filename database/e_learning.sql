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

 Date: 16/01/2024 14:43:28
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
INSERT INTO `about_us_contents` VALUES (1, 'images/about-us-content/about-us.jpg', 'About Us', 'Lorem ipsum dolor sit amet consectetur. Auctor diam adipiscing tempor nunc. Egestas et in nisl amet orci suspendisse mauris ac. Non id eget pulvinar vestibulum placerat nunc sit. Dui arcu at porttitor molestie tempus id sit elementum pretium. Elit morbi eget a leo enim et id elementum odio.\r\n\r\nEnim ultrices orci velit quis cursus proin eu pellentesque. Non cursus cursus orci nibh consequat in ac. Id ac ut sapien eget. Viverra accumsan pulvinar nisi orci tellus ac et. Aliquet id nisi euismod feugiat in id urna duis massa. Maecenas sit purus convallis sed nibh volutpat.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', '2023-12-11 12:22:15', '2023-12-19 13:45:24');

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
INSERT INTO `account_contents` VALUES (1, 'images/account-content/logo_golearn.png', 'GoLearn', 'golearn@email.com', '08123456789', 'Indonesia', 'Jl. Raya Bogor No. 1, Jakarta Timur', '2023-12-11 12:22:15', '2023-12-11 12:22:15');

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
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, 'math', 'images/category-image/course.jpg', 'active', '2023-12-11 12:22:15', '2023-12-11 12:22:15');
INSERT INTO `categories` VALUES (2, 'Big Data', 'images/category-image/65826df67aa00.jpg', 'active', '2023-12-20 04:30:46', '2023-12-20 04:30:46');
INSERT INTO `categories` VALUES (3, 'Artificial Intelligent', 'images/category-image/65826e212541b.jpg', 'active', '2023-12-20 04:31:29', '2023-12-20 04:31:29');
INSERT INTO `categories` VALUES (4, 'Software Development', 'images/category-image/65826e43bf210.jpg', 'active', '2023-12-20 04:32:03', '2023-12-20 04:32:03');
INSERT INTO `categories` VALUES (5, 'UI UX Design', 'images/category-image/65826e5e8ed08.jpg', 'active', '2023-12-20 04:32:30', '2023-12-20 04:32:30');

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
INSERT INTO `certificate_settings` VALUES (1, 'yes', '1675', '110', 'yes', '50', '30', '3', 'this certificate is proudly presented to', 'has successfully completed the course', 'center', 'yes', 'yes', 'Teachers Name', '200', '200', '2023-12-11 12:22:15', '2023-12-22 04:58:28');

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of certificates
-- ----------------------------
INSERT INTO `certificates` VALUES (1, 'images/certificate/65851839eaa87.png', 'CERTIFICATE OF ACHIEVEMENT', 'Congratulations for this great milestone that you have accomplished', 'AI beginner', 'Yaya Wihardi, S.Kom., M.Kom.', 'images/certificate/65851839eaf2b.png', '2023-12-22 05:01:46', '2023-12-22 05:01:46');

-- ----------------------------
-- Table structure for challenges
-- ----------------------------
DROP TABLE IF EXISTS `challenges`;
CREATE TABLE `challenges`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `difficulty` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_by` bigint(0) UNSIGNED NOT NULL,
  `status` bigint(0) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of challenges
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
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chapters
-- ----------------------------
INSERT INTO `chapters` VALUES (2, 2, 'Introduction', '2023-12-22 02:55:57', '2023-12-22 02:55:57');
INSERT INTO `chapters` VALUES (3, 2, 'Chapter 1', '2023-12-24 14:09:34', '2023-12-24 14:09:34');
INSERT INTO `chapters` VALUES (4, 2, 'Chapter 2', '2023-12-24 14:09:45', '2023-12-24 14:09:45');
INSERT INTO `chapters` VALUES (5, 3, 'Introduction', '2023-12-25 12:51:16', '2023-12-25 12:51:16');
INSERT INTO `chapters` VALUES (6, 3, 'Chapter 1', '2023-12-26 04:32:06', '2023-12-26 04:32:06');
INSERT INTO `chapters` VALUES (7, 3, 'Chapter 2', '2023-12-26 04:47:45', '2023-12-26 04:47:45');
INSERT INTO `chapters` VALUES (8, 4, 'Introduction', '2023-12-26 18:14:37', '2023-12-26 18:14:37');
INSERT INTO `chapters` VALUES (9, 4, 'Chapter 1', '2023-12-26 18:14:45', '2023-12-26 18:14:45');
INSERT INTO `chapters` VALUES (10, 4, 'Chapter 2', '2023-12-26 18:14:52', '2023-12-26 18:14:52');

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of course_certificates
-- ----------------------------
INSERT INTO `course_certificates` VALUES (1, 2, 1, '2023-12-22 05:03:16', '2023-12-22 05:03:16');

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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of courses
-- ----------------------------
INSERT INTO `courses` VALUES (2, 'AI beginner', '83nd9L', 8, 3, 'aman', 'aman', 'aman', 'images/course-image/6584faae12e4b.jpg', 'no', 'active', '2023-12-22 02:55:42', '2023-12-22 02:55:42');
INSERT INTO `courses` VALUES (3, 'Figma Tutorial for Beginner', '95aYIR', 9, 5, 'aman', 'aman', 'aman', 'images/course-image/658833ca46c80.jpg', 'no', 'active', '2023-12-24 13:36:10', '2023-12-24 13:36:10');
INSERT INTO `courses` VALUES (4, 'Perkenalan User Experience', '105UzuK', 10, 5, 'aman', 'aman', 'aman', 'images/course-image/658b17b36cd5e.jpg', 'no', 'active', '2023-12-26 18:13:07', '2023-12-26 18:13:07');

-- ----------------------------
-- Table structure for curricula
-- ----------------------------
DROP TABLE IF EXISTS `curricula`;
CREATE TABLE `curricula`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `courses` bigint(0) UNSIGNED NOT NULL,
  `chapter` bigint(0) UNSIGNED NOT NULL,
  `id_category` int(0) NULL DEFAULT NULL,
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
) ENGINE = InnoDB AUTO_INCREMENT = 35 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of curricula
-- ----------------------------
INSERT INTO `curricula` VALUES (2, 2, 2, 2, 'Introduction to AI', 'PDF', 'lesson', '', '2023-12-22 02:56:23', '2023-12-22 02:56:23');
INSERT INTO `curricula` VALUES (3, 2, 2, 3, 'Pengenalan AI', 'tonton yah', 'lesson', '', '2023-12-24 14:03:40', '2023-12-24 14:03:40');
INSERT INTO `curricula` VALUES (4, 2, 3, 4, 'State Space Search', 'PDF', 'lesson', '', '2023-12-24 14:10:15', '2023-12-24 14:11:45');
INSERT INTO `curricula` VALUES (5, 2, 3, 5, 'Problem Solving : State Space Search in AI', 'tonton yah', 'lesson', '', '2023-12-24 14:22:02', '2023-12-24 14:22:02');
INSERT INTO `curricula` VALUES (6, 2, 3, 6, 'Informed Heuristic Search', 'PDF', 'lesson', '', '2023-12-24 14:22:45', '2023-12-24 14:22:45');
INSERT INTO `curricula` VALUES (7, 2, 3, 7, 'Local Search Method', 'tonton yah', 'lesson', '', '2023-12-24 17:20:38', '2023-12-24 17:20:38');
INSERT INTO `curricula` VALUES (8, 2, 3, 8, 'Local Search', 'PDF', 'lesson', '', '2023-12-24 17:21:18', '2023-12-24 17:21:18');
INSERT INTO `curricula` VALUES (9, 2, 4, 9, 'Game Playing', 'PDF', 'lesson', '', '2023-12-24 17:22:22', '2023-12-24 17:22:22');
INSERT INTO `curricula` VALUES (10, 2, 4, 10, 'Constraint Satisfaction Problem', 'pdf', 'lesson', '', '2023-12-25 01:03:46', '2023-12-25 01:03:46');
INSERT INTO `curricula` VALUES (11, 2, 4, 11, 'CSP learn', 'tonton yah', 'lesson', '', '2023-12-25 01:04:55', '2023-12-25 01:04:55');
INSERT INTO `curricula` VALUES (12, 2, 4, 12, 'Logical Agent & PLI', 'pdf', 'lesson', '', '2023-12-25 01:05:43', '2023-12-25 01:05:43');
INSERT INTO `curricula` VALUES (13, 2, 4, 13, 'Rules for Inference - Propositional Logic', 'tonton yah', 'lesson', '', '2023-12-25 01:08:00', '2023-12-25 01:08:00');
INSERT INTO `curricula` VALUES (14, 2, 4, 14, 'First Order Logic Inference', 'pdf', 'lesson', '', '2023-12-25 01:08:31', '2023-12-25 01:08:31');
INSERT INTO `curricula` VALUES (15, 3, 5, 15, 'Mengenal Figma', 'tonton', 'lesson', '', '2023-12-25 12:59:17', '2023-12-25 12:59:17');
INSERT INTO `curricula` VALUES (16, 3, 5, 16, 'Proyek Desain Pertama', 'tonton', 'lesson', '', '2023-12-26 04:31:35', '2023-12-26 04:31:35');
INSERT INTO `curricula` VALUES (17, 3, 6, 17, 'Layers & Group', 'tonton', 'lesson', '', '2023-12-26 04:36:02', '2023-12-26 04:36:02');
INSERT INTO `curricula` VALUES (18, 3, 6, 18, 'UI Component dengan Basic Shape', 'video', 'lesson', '', '2023-12-26 04:41:53', '2023-12-26 04:41:53');
INSERT INTO `curricula` VALUES (19, 3, 6, 19, 'Text Properties', 'video', 'lesson', '', '2023-12-26 04:44:11', '2023-12-26 04:44:11');
INSERT INTO `curricula` VALUES (20, 3, 6, 20, 'Penggunaan Color Scheme', 'video', 'lesson', '', '2023-12-26 04:47:17', '2023-12-26 04:47:17');
INSERT INTO `curricula` VALUES (21, 3, 7, 21, 'Image pada UI Card Design', 'video', 'lesson', '', '2023-12-26 05:10:55', '2023-12-26 05:10:55');
INSERT INTO `curricula` VALUES (22, 3, 7, 22, 'Pen Tool Untuk Chart Design', 'video', 'lesson', '', '2023-12-26 05:12:03', '2023-12-26 05:12:03');
INSERT INTO `curricula` VALUES (23, 3, 7, 23, 'Belajar Pencil Tool Untuk Illustration Design', 'video', 'lesson', '', '2023-12-26 05:12:53', '2023-12-26 05:12:53');
INSERT INTO `curricula` VALUES (24, 4, 8, 24, 'Apa itu UI/UX Design?', 'tonton', 'lesson', '', '2023-12-27 18:45:19', '2023-12-27 18:45:19');
INSERT INTO `curricula` VALUES (25, 4, 8, 25, 'Perbedaan UI/UX', 'pdf', 'lesson', '', '2023-12-27 18:45:50', '2023-12-27 18:45:50');
INSERT INTO `curricula` VALUES (26, 4, 9, 26, 'Rumus Ampuh UI/UX Design', 'tonton', 'lesson', '', '2024-01-01 23:37:09', '2024-01-01 23:37:09');
INSERT INTO `curricula` VALUES (27, 4, 9, 27, 'Design Thinking Empathize', 'pdf', 'lesson', '', '2024-01-01 23:37:45', '2024-01-01 23:37:45');
INSERT INTO `curricula` VALUES (28, 4, 9, 28, 'Ideate Case', 'pdf', 'lesson', '', '2024-01-01 23:39:55', '2024-01-01 23:39:55');
INSERT INTO `curricula` VALUES (29, 4, 9, 29, 'Design Thinking', 'tonton', 'lesson', '', '2024-01-01 23:40:50', '2024-01-01 23:40:50');
INSERT INTO `curricula` VALUES (30, 4, 9, 30, 'Sketch UI', 'pdf', 'lesson', '', '2024-01-01 23:42:16', '2024-01-01 23:42:16');
INSERT INTO `curricula` VALUES (31, 4, 9, 31, 'Trik Praktis Membuat Sketsa', 'tonton', 'lesson', '', '2024-01-01 23:43:32', '2024-01-01 23:43:32');
INSERT INTO `curricula` VALUES (32, 4, 10, 32, 'Design Solution', 'pdf', 'lesson', '', '2024-01-01 23:44:59', '2024-01-01 23:44:59');
INSERT INTO `curricula` VALUES (33, 4, 10, 33, 'Mendesain Mockup Design High Fidelity', 'tonton', 'lesson', '', '2024-01-01 23:45:56', '2024-01-01 23:45:56');
INSERT INTO `curricula` VALUES (34, 4, 10, 34, 'Optimalisasi Desain UI/UX', 'tonton', 'lesson', '', '2024-01-01 23:46:50', '2024-01-01 23:46:50');
INSERT INTO `curricula` VALUES (35, 4, 10, 35, 'Design Evaluation', 'pdf', 'lesson', '', '2024-01-01 23:47:12', '2024-01-01 23:47:12');

-- ----------------------------
-- Table structure for curriculum_challenges
-- ----------------------------
DROP TABLE IF EXISTS `curriculum_challenges`;
CREATE TABLE `curriculum_challenges`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `curriculum` bigint(0) UNSIGNED NOT NULL,
  `challenge` bigint(0) UNSIGNED NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `curriculum_challenges_curriculum_foreign`(`curriculum`) USING BTREE,
  INDEX `curriculum_challenges_challenge_foreign`(`challenge`) USING BTREE,
  CONSTRAINT `curriculum_challenges_challenge_foreign` FOREIGN KEY (`challenge`) REFERENCES `challenges` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `curriculum_challenges_curriculum_foreign` FOREIGN KEY (`curriculum`) REFERENCES `curricula` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of curriculum_challenges
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
  `next` tinyint(1) NOT NULL DEFAULT 0,
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
INSERT INTO `footer_contents` VALUES (1, 'Copyright © 2023 GoLearnLMS.\r\n            All rights reserved | Made By Ruly Nurul H', '2023-12-11 12:22:15', '2023-12-11 12:22:15');

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
INSERT INTO `home_contents` VALUES (1, 'images/home-content/bg-slider.jpg', 'Lorem ipsum dolor', 'Lorem ipsum dolor sit amet consectetur.  Eros ullamcorper consectetur pretium  egestas turpis. Mattis ornare vitae enim a sit accumsan.', 'Best Platform  To learn  Everything', '5', 'yes', 'Welcome To Go Learn!', 'Featured Courses', 'Meet Our Teacher!', '2023-12-11 12:22:15', '2023-12-19 13:44:15');

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
) ENGINE = InnoDB AUTO_INCREMENT = 35 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of lessons
-- ----------------------------
INSERT INTO `lessons` VALUES (2, 2, 5, NULL, 'lesson-file/6584fad741a65.pdf', '2023-12-22 02:56:23', '2023-12-22 02:56:23');
INSERT INTO `lessons` VALUES (3, 3, 12, 'https://www.youtube.com/embed/MZOg_7MO4hI?si=ZX-PdU8K5UwD-uWM', NULL, '2023-12-24 14:03:40', '2023-12-24 14:03:40');
INSERT INTO `lessons` VALUES (4, 4, 5, NULL, 'lesson-file/65883bc726025.pdf', '2023-12-24 14:10:15', '2023-12-24 14:10:15');
INSERT INTO `lessons` VALUES (5, 5, 14, 'https://www.youtube.com/embed/odW_9E6QQgA?si=CEFWw8YzGbNcrGEY', NULL, '2023-12-24 14:22:02', '2023-12-24 14:22:02');
INSERT INTO `lessons` VALUES (6, 6, 5, NULL, 'lesson-file/65883eb565c57.pdf', '2023-12-24 14:22:45', '2023-12-24 14:22:45');
INSERT INTO `lessons` VALUES (7, 7, 17, 'https://www.youtube.com/embed/g0lF_p_Zlmw?si=d7VBathDCITe8EFV', NULL, '2023-12-24 17:20:38', '2023-12-24 17:20:38');
INSERT INTO `lessons` VALUES (8, 8, 5, NULL, 'lesson-file/6588688e9b3f0.pdf', '2023-12-24 17:21:18', '2023-12-24 17:21:18');
INSERT INTO `lessons` VALUES (9, 9, 5, NULL, 'lesson-file/658868ce3b8d9.pdf', '2023-12-24 17:22:22', '2023-12-24 17:22:22');
INSERT INTO `lessons` VALUES (10, 10, 5, NULL, 'lesson-file/6588d4f278d85.pdf', '2023-12-25 01:03:46', '2023-12-25 01:03:46');
INSERT INTO `lessons` VALUES (11, 11, 14, 'https://www.youtube.com/embed/-IO4fPO0rxk?si=SknzdramH8MxcQVd', NULL, '2023-12-25 01:04:55', '2023-12-25 01:04:55');
INSERT INTO `lessons` VALUES (12, 12, 5, NULL, NULL, '2023-12-25 01:05:43', '2023-12-25 01:05:43');
INSERT INTO `lessons` VALUES (13, 13, 7, 'https://www.youtube.com/embed/_ttwRaZOERc?si=1CsuNSFDOZmQaI7I', NULL, '2023-12-25 01:08:00', '2023-12-25 01:08:00');
INSERT INTO `lessons` VALUES (14, 14, 5, NULL, 'lesson-file/6588d60fe1eb4.pdf', '2023-12-25 01:08:31', '2023-12-25 01:08:31');
INSERT INTO `lessons` VALUES (15, 15, 4, 'https://www.youtube.com/embed/k7cbBb2Ju5E?si=5w7DQXEmVYhaHQuI', NULL, '2023-12-25 12:59:17', '2023-12-25 12:59:17');
INSERT INTO `lessons` VALUES (16, 16, 7, 'https://www.youtube.com/embed/uvpkJnYHOQU?si=quIVO9x5llAr-0og', NULL, '2023-12-26 04:31:35', '2023-12-26 04:31:35');
INSERT INTO `lessons` VALUES (17, 17, 5, 'https://www.youtube.com/embed/oimb79wuO18?si=KulTxU8KtqoEC1Os', NULL, '2023-12-26 04:36:02', '2023-12-26 04:36:02');
INSERT INTO `lessons` VALUES (18, 18, 8, 'https://www.youtube.com/embed/2fFtOUYG2RU?si=PXZl7TSHdXga_D8c', NULL, '2023-12-26 04:41:53', '2023-12-26 04:41:53');
INSERT INTO `lessons` VALUES (19, 19, 8, 'https://www.youtube.com/embed/vHEntLdrjXY?si=dJM6nC9jQYzsxisn', NULL, '2023-12-26 04:44:11', '2023-12-26 04:44:11');
INSERT INTO `lessons` VALUES (20, 20, 8, 'https://www.youtube.com/embed/YRCFVarQnOg?si=YpY5qiKEJKYn0EIF', NULL, '2023-12-26 04:47:17', '2023-12-26 04:47:17');
INSERT INTO `lessons` VALUES (21, 21, 7, 'https://www.youtube.com/embed/1IptcKy8PLA?si=f5S6YwABWZORGkkl', NULL, '2023-12-26 05:10:55', '2023-12-26 05:10:55');
INSERT INTO `lessons` VALUES (22, 22, 5, 'https://www.youtube.com/embed/ck-x84uSgxg?si=JQnMW0_v63R_RyLT', NULL, '2023-12-26 05:12:03', '2023-12-26 05:12:03');
INSERT INTO `lessons` VALUES (23, 23, 5, 'https://www.youtube.com/embed/y35iD3SjTjw?si=LYOxFxHf2il6YNdA', NULL, '2023-12-26 05:12:53', '2023-12-26 05:12:53');
INSERT INTO `lessons` VALUES (24, 24, 4, 'https://www.youtube.com/embed/RCVb0sNqDcs?si=JatpUikUc8EQVk8k', NULL, '2023-12-27 18:45:19', '2023-12-27 18:45:19');
INSERT INTO `lessons` VALUES (25, 25, 10, NULL, 'lesson-file/658c70de76660.pdf', '2023-12-27 18:45:50', '2023-12-27 18:45:50');
INSERT INTO `lessons` VALUES (26, 26, 5, 'https://www.youtube.com/embed/VuBrwKd3eQA?si=Lh_gB2ZjTwc8qihs', NULL, '2024-01-01 23:37:09', '2024-01-01 23:37:09');
INSERT INTO `lessons` VALUES (27, 27, 5, NULL, 'lesson-file/65934cc98d591.pdf', '2024-01-01 23:37:45', '2024-01-01 23:37:45');
INSERT INTO `lessons` VALUES (28, 28, 5, NULL, NULL, '2024-01-01 23:39:55', '2024-01-01 23:39:55');
INSERT INTO `lessons` VALUES (29, 29, 4, 'https://www.youtube.com/embed/_r0VX-aU_T8?si=h2MuOOgEepZPwskn', NULL, '2024-01-01 23:40:50', '2024-01-01 23:40:50');
INSERT INTO `lessons` VALUES (30, 30, 5, NULL, 'lesson-file/65934dd87fff0.pdf', '2024-01-01 23:42:16', '2024-01-01 23:42:16');
INSERT INTO `lessons` VALUES (31, 31, 6, 'https://www.youtube.com/embed/mmdW_2_aips?si=tjKuuGS3mfbCfDv_', NULL, '2024-01-01 23:43:32', '2024-01-01 23:43:32');
INSERT INTO `lessons` VALUES (32, 32, 5, NULL, NULL, '2024-01-01 23:44:59', '2024-01-01 23:44:59');
INSERT INTO `lessons` VALUES (33, 33, 14, 'https://www.youtube.com/embed/6aUf1Vj3wdA?si=8UQAXIIN9SJtZpNb', NULL, '2024-01-01 23:45:56', '2024-01-01 23:45:56');
INSERT INTO `lessons` VALUES (34, 34, 9, 'https://www.youtube.com/embed/64j9OjngGT4?si=Is4OPaMaCMiKk0Mu', NULL, '2024-01-01 23:46:50', '2024-01-01 23:46:50');
INSERT INTO `lessons` VALUES (35, 35, 5, NULL, NULL, '2024-01-01 23:47:12', '2024-01-01 23:47:12');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

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
INSERT INTO `migrations` VALUES (25, '2023_11_10_234010_create_challenges_table', 1);
INSERT INTO `migrations` VALUES (26, '2023_11_10_234925_create_question_challenges_table', 1);
INSERT INTO `migrations` VALUES (27, '2023_11_10_235003_create_result_challenges_table', 1);
INSERT INTO `migrations` VALUES (28, '2023_11_28_211732_create_curriculum_challenges_table', 1);

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
-- Table structure for question_challenges
-- ----------------------------
DROP TABLE IF EXISTS `question_challenges`;
CREATE TABLE `question_challenges`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `challenge_id` bigint(0) UNSIGNED NOT NULL,
  `file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `question` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` json NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `question_challenges_challenge_id_foreign`(`challenge_id`) USING BTREE,
  CONSTRAINT `question_challenges_challenge_id_foreign` FOREIGN KEY (`challenge_id`) REFERENCES `challenges` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of question_challenges
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
  `answer` json NOT NULL,
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
  `duration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
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
-- Table structure for result_challenges
-- ----------------------------
DROP TABLE IF EXISTS `result_challenges`;
CREATE TABLE `result_challenges`  (
  `id` bigint(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `challenge_id` bigint(0) UNSIGNED NOT NULL,
  `user_id` bigint(0) UNSIGNED NOT NULL,
  `score` int(0) NOT NULL,
  `time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `result_challenges_challenge_id_foreign`(`challenge_id`) USING BTREE,
  INDEX `result_challenges_user_id_foreign`(`user_id`) USING BTREE,
  CONSTRAINT `result_challenges_challenge_id_foreign` FOREIGN KEY (`challenge_id`) REFERENCES `challenges` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `result_challenges_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of result_challenges
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
INSERT INTO `social_contents` VALUES (1, 'images/social-content/icon_golearn.png', 'https://www.golearn.id/', 'GoLearn', '2023-12-11 12:22:15', '2023-12-11 12:22:15');

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
  `extra_hint` bigint(0) NULL DEFAULT 0,
  `email_verified_at` timestamp(0) NULL DEFAULT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `users_email_unique`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'asep', 'asep@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'teacher', 'active', '$2y$10$maR9.QwnXuzh538hlQHR1.acAdQK3Og8iTArp35nluy.2r5djMy.a', 0, NULL, NULL, '2023-12-11 12:22:14', '2023-12-11 12:22:14');
INSERT INTO `users` VALUES (5, 'rudi', 'rudi@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'student', 'active', '$2y$10$GI6Z11C3ehk0b49DZBldl.cTGQvON4q7vvaG.zZuUIbXFfTvL3xYy', 0, NULL, NULL, '2023-12-11 12:22:15', '2023-12-11 12:22:15');
INSERT INTO `users` VALUES (6, 'admin', 'admin@gmail.com', NULL, '081234567890', NULL, NULL, NULL, NULL, 'I\'m Admin', 'images/profile-picture/6583370e62d7d.png', 'admin', 'active', '$2y$10$Hfwy/pU4vQxrAHSE7taGkOfEan6uZQsMMXLkpTIsQCtls/vQFE662', 0, NULL, NULL, '2023-12-11 12:22:15', '2023-12-20 18:48:46');
INSERT INTO `users` VALUES (7, 'student1', 'student1@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'images/avatar/image_1.png', 'student', 'active', '$2y$10$YwRxmrRbaU3.Se6DHrFS9utnIlyPUCqK4Bm/vevyFyVefRddqFgCS', 0, NULL, NULL, '2023-12-19 18:06:54', '2023-12-22 02:58:55');
INSERT INTO `users` VALUES (8, 'Yaya Wihardi, S.Kom., M.Kom.', 'yayaw@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'teacher', 'active', '$2y$10$8KrZMjbugzfa9xFhfIaGp.6gtrH1y5FHUjpV9lGg8NyLvS5fZX5q6', 0, NULL, NULL, '2023-12-20 04:42:10', '2023-12-20 04:42:10');
INSERT INTO `users` VALUES (9, 'Build With Angga', 'angga@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'teacher', 'active', '$2y$10$wVJ3xBP7.zyJ4/f5yaMxCOcyRjcr288MTOSb.NQU4c1L.ZptVM7E2', 0, NULL, NULL, '2023-12-24 13:29:19', '2023-12-24 13:29:19');
INSERT INTO `users` VALUES (10, 'Herman Tolle, S.T., M.T.', 'hermantolle@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'teacher', 'active', '$2y$10$WshgVlDWGh7Da9wQG8PK2uJTfxv/kbYh3zQMLvkRn7W51le9ks4hi', 0, NULL, NULL, '2023-12-26 18:10:43', '2023-12-26 18:10:43');

SET FOREIGN_KEY_CHECKS = 1;
