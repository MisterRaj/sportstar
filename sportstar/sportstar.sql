-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 22, 2016 at 09:06 PM
-- Server version: 5.5.47-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sportstar`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(35) NOT NULL,
  `category` smallint(6) NOT NULL,
  `content` text NOT NULL,
  `admin_comments` varchar(255) NOT NULL,
  `author_id` int(11) NOT NULL,
  `image` varchar(40) NOT NULL,
  `status` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=53 ;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `title`, `category`, `content`, `admin_comments`, `author_id`, `image`, `status`) VALUES
(1, 'Rahul the wall', 3, 'Best test cricketer. My all time favorite star. Nick named as the Wall of India. The first player to score 100 against all teams and in their countries. Still holds the record of having most number of catches in test cricket.', 'Need more content.', 1, 'unspecified.png', 2),
(2, 'Sachin Ramesh Tendulkar', 1, 'God of cricket, Man of hundred hundreds.', '', 1, '', 1),
(3, 'Sourav Ganguly', 1, 'Our Dada, One of the great captain who has initiated some daring moves and unfortunately forgotten by today generation. Great captain.', '', 1, 'maxresdefault.jpg', 2),
(4, 'VVS Laxman', 1, 'God of fourth innings', '', 1, '', 1),
(5, 'Zaheer Khan', 1, 'Renowned bowler of indian team', '', 1, '', 3),
(6, 'Virat Kohli', 1, 'Our Next hope', '', 1, '', 1),
(7, 'Mahendra Singh Dhoni', 1, 'Good captain', '', 1, '', 3),
(8, 'Anil Kumble', 1, 'A Determined Person', '', 1, '', 1),
(9, 'Rahul the wall', 1, 'sdfsd', '', 1, 'master-oogway-quote.jpg', 3),
(10, 'Chris Gayle', 1, 'Godzilla of cricket', '', 1, '', 3),
(11, 'Steve Waugh', 1, 'Great player', '', 1, '', 1),
(12, 'Dale Steyn', 1, 'One of the worlds fastest bowler.', '', 1, 'master-oogway-quote.jpg', 3),
(13, 'Virendar Sehwag', 1, 'It is a joy to watch his batting.', '', 1, 'master-oogway-quote.jpg', 3),
(14, 'Kapil Dev', 1, 'First Indian captain to world cup.', '', 1, 'master-oogway-quote.jpg', 3),
(15, 'Suresh Raina', 1, 'Not in good form now.', '', 1, 'master-oogway-quote.jpg', 3),
(16, 'Ricky Ponting', 1, 'Talented player with some bad character.', '', 1, 'master-oogway-quote.jpg', 1),
(17, 'Lance Klusener', 1, 'Promising and wonderful allrounder, remembering 1999 semi-final. :(', '', 1, '', 1),
(18, 'David warner', 1, 'Australian opener who showed him as a good captain in IPL 2016.', '', 1, 'master-oogway-quote.jpg', 3),
(20, 'David warner', 1, 'Australian opener who showed him as a good captain in IPL 2016.', '', 1, 'master-oogway-quote.jpg', 1),
(22, 'Ashish Nehra', 1, 'is an Indian cricketer (left-arm medium fast bowler) who has represented India at the international level since 1999. He embodies various virtues of a left- handed bowler- pace, accuracy, strategic variations in line and length, and the ability to swing the ball both ways. He has been particularly effective with the new ball and at the death overs. Due to fitness issues, he has been absent from the national scene for extending stretches, but has been a part of the Indian team in two largely successful World Cup campaigns, two Asia Cups, and three Champions Trophies. He has also been particularly effective in the IPL, in which he has represented four different teams.', '', 1, 'master-oogway-quote.jpg', 3),
(23, 'sfsdfsdf', 1, 'sfsdfsdf', '', 1, 'master-oogway-quote.jpg', 1),
(24, 'Andrew Flintoff', 1, 'Renowned all rounder for his batting and bowling abilities also renowned for prone to injuries.', '', 1, '', 1),
(25, 'Greame Smith', 1, 'Former south african captain.', '', 1, 'Graeme-Smith-South-Africa-captain-retire', 1),
(26, 'Alistair Cook', 0, '1', '', 1, 'England captain', 0),
(27, 'undefined', 0, '1', '', 1, '1', 0),
(28, 'Aravind', 0, '1', '', 1, '', 1),
(29, 'fasdfsda', 1, 'sdfasdfaf', '', 1, '', 1),
(30, 'Sachin', 1, 'Our God of gods.', '', 1, '', 1),
(31, 'Rahul Sarath Dravid', 1, 'The great wall of India.', '', 3, 'oogway-quotes.jpg', 1),
(32, 'Rahul\r\n Sarath Dravid', 0, 'update content', '', 3, '', 1),
(41, 'fasdfsadfsdf', 1, 'fasdfasdf', '', 1, '', 1),
(42, 'dsfasfasdf', 1, 'asdfsdfasdf', '', 1, '', 1),
(43, 'afasdfasdf', 2, 'fsdfasdf', '', 1, '', 1),
(44, 'asfdasdf', 1, 'asdfsdfaf', '', 1, '', 1),
(45, 'Confusing Number game', 2, 'Head-butting is big news in football, but the substitutions that followed after an Indian player, Baljit Sahni, was given the marching orders during the recent ISL clash between FC Goa and Atletico de Kolkata in Margoa also made headlines.', '', 1, '', 3),
(46, 'South Africa feel like home in Indi', 1, 'South Africas victory in the first ODI of the on-going series against India was their fifth consecutive win against them, in India, in completed matches across all formats of international cricket. The streak goes back to February 2010, when South Africa have beaten India in three ODIs and two T20Is, in India, without a losing a single match. Interestingly, South Africa lost four of their five matches against India, in India, before that streak started (see table).', '', 2, '', 2),
(47, 'Debating T20 debacle', 1, 'So what really went wrong for India in the T20 series against South Africa? Well, there were a few areas of concern. One, the lack of one-day exposure for Team India proved that some of these players, though brilliant in the IPL, still dont know the role expected of them in the National squad. Clearly, the team lacked a settled look.Skipper Mahendra Singh Dhoni was also looking more and more vulnerable to pressure, writes Rakesh Rao.', '', 2, '', 1),
(48, 'Manoharâ€™s crucial second innings', 1, 'People acquainted with Shashank Manoharâ€™s way of functioning as a cricket administrator only have encouraging and positive statements to make about him. The 58-year-old lawyer from Nagpur has held top positions in the provincial and Indian cricket boards and, indeed, he is not without any criticisms. A few of them have been quite scathing.\r\n\r\nOne of the few decisions that he was party to relates to the amendment of a rule in the BCCIâ€™s Memorandum and Rules and Regulations that permitted a Board official to be part owner of teams in the Indian Premier League. The actual amendment clause 6.2.4 reads: â€œNo administrator shall have directly or indirectly any commercial interest in any of the events of BCCI, excluding IPL, Champions League and Twenty20.â€\r\n\r\nThose were the nascent days (in 2008) of the IPL, and people such as Sharad Pawar, Manohar, N. Srinivasan and Lalit Modi formed a solid and powerful phalanx, as the wheels of the BCCI moved in the direction given by these four. In fact, Srinivasan bid for the Chennai franchise on the basis of the letter given by Pawar that there would not be any conflict of interest.\r\n\r\nAlthough the BCCI went through the process of franchise auction, it was common knowledge that the teams went to people whose pockets were deep. Sources have often revealed that Manohar and Srinivasan were against the move to make Modi the IPL commissioner for five years, but Pawarâ€™s opinion went in favour of Modi at a BCCI meeting.', '', 2, '', 1),
(49, 'Time to regroup and think positivel', 1, 'For Mahendra Singh Dhoni, the energetic cricketer hailed for his vision and known to back his players, T20 is not about brains. He came to this conclusion after suffering a 2-0 defeat at the hands of South Africa in the three-match series at home recently.\r\n\r\nâ€œI personally feel that I used too much brain in this format. Itâ€™s very important I keep myself free, and go and play my strokes. Depending on that, I play a bit slow initially. In this format, I believe, I should play the big shots from the word go, irrespective of whatever the scenario is because thatâ€™s what this format is all about,â€ Dhoni spoke his mind.\r\n\r\nIs T20 plain slam-bang stuff played on predictable lines? The problem with a T20 game is that it can become irritatingly monotonous if brains are set aside.\r\n\r\nT20, if one were to believe modern-day cricketers, is taxing, demanding and energy sapping. Having won the inaugural T20 World Cup, India are well versed with the expectations of their fans, some of whom are very passionate and even fanatic.\r\n\r\nNothing â€” absolutely nothing â€” short of a title victory would suffice when India take the field next year as the hosts of the T20 World Cup.\r\n\r\nâ€œIt is a work in progress. There are still six months remaining (for the World T20), and there is plenty of one-day cricket the whole of December until January. We have some T20Is in Australia, and then Sri Lanka is coming to India. There is also the Asia Cup. It is a great opportunity to throw the hat into the ring (for the ones looking for a place in the Indian team); it could be young or old or anybody, form will be crucial,â€ India coach Ravi Shastri said.', '', 2, '', 1),
(50, 'Time to regroup and think positivel', 1, 'For Mahendra Singh Dhoni, the energetic cricketer hailed for his vision and known to back his players, T20 is not about brains. He came to this conclusion after suffering a 2-0 defeat at the hands of South Africa in the three-match series at home recently.\r\n\r\nâ€œI personally feel that I used too much brain in this format. Itâ€™s very important I keep myself free, and go and play my strokes. Depending on that, I play a bit slow initially. In this format, I believe, I should play the big shots from the word go, irrespective of whatever the scenario is because thatâ€™s what this format is all about,â€ Dhoni spoke his mind.\r\n\r\nIs T20 plain slam-bang stuff played on predictable lines? The problem with a T20 game is that it can become irritatingly monotonous if brains are set aside.\r\n\r\nT20, if one were to believe modern-day cricketers, is taxing, demanding and energy sapping. Having won the inaugural T20 World Cup, India are well versed with the expectations of their fans, some of whom are very passionate and even fanatic.\r\n\r\nNothing â€” absolutely nothing â€” short of a title victory would suffice when India take the field next year as the hosts of the T20 World Cup.\r\n\r\nâ€œIt is a work in progress. There are still six months remaining (for the World T20), and there is plenty of one-day cricket the whole of December until January. We have some T20Is in Australia, and then Sri Lanka is coming to India. There is also the Asia Cup. It is a great opportunity to throw the hat into the ring (for the ones looking for a place in the Indian team); it could be young or old or anybody, form will be crucial,â€ India coach Ravi Shastri said.', '', 2, '', 1),
(51, 'Time to regroup and think positivel', 1, 'For Mahendra Singh Dhoni, the energetic cricketer hailed for his vision and known to back his players, T20 is not about brains. He came to this conclusion after suffering a 2-0 defeat at the hands of South Africa in the three-match series at home recently.\r\n\r\nâ€œI personally feel that I used too much brain in this format. Itâ€™s very important I keep myself free, and go and play my strokes. Depending on that, I play a bit slow initially. In this format, I believe, I should play the big shots from the word go, irrespective of whatever the scenario is because thatâ€™s what this format is all about,â€ Dhoni spoke his mind.\r\n\r\nIs T20 plain slam-bang stuff played on predictable lines? The problem with a T20 game is that it can become irritatingly monotonous if brains are set aside.\r\n\r\nT20, if one were to believe modern-day cricketers, is taxing, demanding and energy sapping. Having won the inaugural T20 World Cup, India are well versed with the expectations of their fans, some of whom are very passionate and even fanatic.\r\n\r\nNothing â€” absolutely nothing â€” short of a title victory would suffice when India take the field next year as the hosts of the T20 World Cup.\r\n\r\nâ€œIt is a work in progress. There are still six months remaining (for the World T20), and there is plenty of one-day cricket the whole of December until January. We have some T20Is in Australia, and then Sri Lanka is coming to India. There is also the Asia Cup. It is a great opportunity to throw the hat into the ring (for the ones looking for a place in the Indian team); it could be young or old or anybody, form will be crucial,â€ India coach Ravi Shastri said', '', 2, '', 1),
(52, 'Time to regroup and think positivel', 1, 'For Mahendra Singh Dhoni, the energetic cricketer hailed for his vision and known to back his players, T20 is not about brains. He came to this conclusion after suffering a 2-0 defeat at the hands of South Africa in the three-match series at home recently.\r\n\r\nâ€œI personally feel that I used too much brain in this format. Itâ€™s very important I keep myself free, and go and play my strokes. Depending on that, I play a bit slow initially. In this format, I believe, I should play the big shots from the word go, irrespective of whatever the scenario is because thatâ€™s what this format is all about,â€ Dhoni spoke his mind.\r\n\r\nIs T20 plain slam-bang stuff played on predictable lines? The problem with a T20 game is that it can become irritatingly monotonous if brains are set aside.\r\n\r\nT20, if one were to believe modern-day cricketers, is taxing, demanding and energy sapping. Having won the inaugural T20 World Cup, India are well versed with the expectations of their fans, some of whom are very passionate and even fanatic.\r\n\r\nNothing â€” absolutely nothing â€” short of a title victory would suffice when India take the field next year as the hosts of the T20 World Cup.\r\n\r\nâ€œIt is a work in progress. There are still six months remaining (for the World T20), and there is plenty of one-day cricket the whole of December until January. We have some T20Is in Australia, and then Sri Lanka is coming to India. There is also the Asia Cup. It is a great opportunity to throw the hat into the ring (for the ones looking for a place in the Indian team); it could be young or old or anybody, form will be crucial,â€ India coach Ravi Shastri said', '', 2, '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(25) NOT NULL,
  `user_name` varchar(15) NOT NULL,
  `email` varchar(35) NOT NULL,
  `password` varchar(25) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `role` smallint(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `user_name`, `email`, `password`, `phone`, `role`) VALUES
(1, 'Aravind', 'aravind.raj', 'aravind.raj@aspiresys.com', 'Abelhawkes@123', '9719289256', 1),
(2, 'Abel Hawkes', 'abelhawkes', 'abelhawkes@gmail.com', 'Abel@123', '9442857927', 2),
(3, 'rahul', 'rahuldravid', 'rahuldravid@gmail.com', 'rahuldravid@123', '9791289256', 2),
(4, 'wewe', 'wewe', 'rwerwerwer', 'rwerwer@werwer.com', '1423423423', 0),
(5, 'wewe', 'wewe', 'aspire', 'rwerwer@werwer.com', '1423423423', 0),
(6, 'wewe', 'wewe', 'aspire', 'rwerwer@werwer.com', '1423423423', 0),
(7, 'Sasdfasdf', 'sdfasdfasdf', '123456', 'aravind@gmail.com', '9791289256', 0),
(8, 'Aravind Raj', 'aravindraj2688', 'Abelhawkes@123', 'aravindraj2688@gmail.com', '9791289256', 0),
(9, 'Aravind Raj', 'aravind.raj', 'Abelhawkes@123', 'aravindraj2688@gmail.com', '9791289256', 0),
(10, 'Aravind Raj', 'aravind.raj', 'Abelhawkes@123', 'aravindraj2688@gmail.com', '9791289245', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
